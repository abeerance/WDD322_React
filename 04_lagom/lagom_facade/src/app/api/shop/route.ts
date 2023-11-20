import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Check if the request method is GET
  if (req.method !== "GET") {
    // If not, return a 405 Method Not Allowed response
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const search = req.nextUrl.search;
  try {
    const strapiResponse = await axios.get(
      // endpoint of the Strapi API for registration
      `${process.env.BASE_URL}/api/shirts${search}`
    );

    return NextResponse.json({ data: strapiResponse.data }, { status: 200 });
  } catch (error: AxiosError | any) {
    return NextResponse.json(
      {
        error: error.response || "Registration failed",
      },
      { status: error.response?.status || 500 }
    );
  }
}
