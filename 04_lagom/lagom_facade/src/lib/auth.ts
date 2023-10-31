import { NextAuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// Define an interface to extend the default user type from NextAuth
// This allows us to add a JWT field to the User type
interface ExtendedUser extends User {
  jwt?: string; // Optional JWT field to store the JSON Web Token
}

// Configuring the authentication options for NextAuth
export const authOptions: NextAuthOptions = {
  // 1. define the list of authentication providers
  providers: [
    // Configuring the CredentialsProvider for username and password
    // authentication
    CredentialsProvider({
      // a name for this provider which can be used in the signIn function
      name: "credentials",
      credentials: {
        //  define the required fields for this provider
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // The authorize function is called when a user tries to log in
      async authorize(credentials): Promise<ExtendedUser | null> {
        // Sending a POST request to the Strapi API to authenticate the user
        const response = await fetch(`${process.env.BASE_URL}/api/auth/local`, {
          // here we define the HTTP method, the header and the body
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials?.username,
            password: credentials?.password,
          }),
        });

        // get user data from response
        const user = await response.json();

        // If the response is successful
        // return the user data including the JWT token
        if (response.ok && user) {
          return {
            id: user.user.id,
            name: user.user.username,
            email: user.user.email,
            jwt: user.jwt,
          };
        }

        // If authentication fails, return null
        return null;
      },
    }),
  ],
  // Define callback functions to customize the authentication behavior
  callbacks: {
    // The JWT callback is called whenever a JWT is created or updated
    async jwt({ token, user }: { token: JWT; user?: ExtendedUser | null }) {
      // if there is an user object (i.e. during login),
      // add the JWT to the token
      if (user) {
        token.accessToken = user.jwt;
      }
      // return the updated token
      return token;
    },
    // session callback is called whenever session data is retrieved
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add the access token to the session object
      // so it can be accessed client-side
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};
