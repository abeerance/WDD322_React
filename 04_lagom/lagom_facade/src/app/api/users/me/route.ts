import axios from "axios";

// Define the GET function that will handle GET requests
export async function GET(req: Request) {
  // Check if the request method is GET
  if (req.method !== "GET") {
    // If not, return a 405 Method Not Allowed response
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Get the 'Authorization' header from the incoming request
  const authorizationHeader = req.headers.get("Authorization");
  // Extract the token from the 'Authorization' header (format: Bearer <token>)
  const token = authorizationHeader?.split(" ")[1];

  // Check if the token is not provided
  if (!token) {
    // If not, return a 401 Unauthorized response
    return new Response(JSON.stringify({ message: "Token not provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Try to make a request to the Strapi server
  try {
    // Make a GET request to the Strapi server to fetch the user information
    // Include the 'Authorization' header with the Bearer token in the request
    const strapiResponse = await axios.get(
      `${process.env.BASE_URL}/api/users/me?populate=avatar`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Return the user information with a 200 OK response
    return new Response(JSON.stringify({ user: strapiResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    // Log the error for debugging purposes
    console.error("Error fetching user information:", error);
    // Return an error response with the status code from the error or 500 Internal Server Error
    // The error message is also included in the response
    return new Response(
      JSON.stringify({
        error:
          error.response?.data?.message || "Failed to get user information",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
