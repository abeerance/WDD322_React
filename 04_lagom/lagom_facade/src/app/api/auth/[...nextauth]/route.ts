import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

// Create the NextAuth handler with the provided authentication options.
// The NextAuth function takes a configuration object as its argument
// an returns handler functions for HTTP GET and POST requests.
const handler = NextAuth(authOptions);

// Exporting the handler functions for HTTP GET and POST requests.
// In Next.js API routes, you can define functions to handle specific HTTP methods.
// Here both GET and POST requests are beind handled by the NextAuth handler
// This is necessary, because the authentication flow involves both retrieving data (GET)
// and submitting data (POST).
export { handler as GET, handler as POST };
