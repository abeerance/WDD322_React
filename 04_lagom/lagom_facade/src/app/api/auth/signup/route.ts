import axios from "axios";
import { NextResponse } from "next/server";

// define the type of the request body
type Data = {
  username: string;
  email: string;
  password: string;
};

// In Next.js 13, the name of the function must be a HTTP Method
// else it won't work
export async function POST(req: Request) {
  // only allow POST requests
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  // get data from the request body
  const data: Data = await req.json();

  // check if the data is valid
  if (!data.username || !data.email || !data.password) {
    console.log("blalbalba");
    return NextResponse.json(
      { message: "Username, email and password are required" },
      { status: 400 }
    );
  }

  // make the request to Strapi API
  try {
    console.log("what the fuck");
    const strapiResponse = await axios.post(
      // endpoint of the Strapi API for registration
      `${process.env.BASE_URL}/api/auth/local/register`,
      // body of the request
      { username: data.username, email: data.email, password: data.password }
    );

    // return the response from the Strapi API
    return NextResponse.json({ user: strapiResponse.data }, { status: 200 });
  } catch (error: any) {
    console.log("im here");
    // return the error
    return NextResponse.json(
      {
        error: error.response || "Registration failed",
      },
      { status: error.response?.status || 500 }
    );
  }
}
