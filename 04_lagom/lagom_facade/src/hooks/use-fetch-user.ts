import { UserData } from "@/types/user";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// Define the structure of the error response we expect from the API.
// This helps TypeScript understand what kind of error object we're dealing with.
interface IErrorResponse {
  message: string; // A user-friendly error message.
  status: number; // The HTTP status code associated with the error.
}

// Define the useFetchUser hook, which uses generic types to enforce the structure of the returned data.
const useFetchUser = (): {
  userData: UserData | null; // The user data state, initially null.
  isLoading: boolean; // A boolean to track if the request is in progress.
  error: IErrorResponse | null; // The error state, initially null.
} => {
  // Use the useSession hook to access the current session and authentication state.
  const { data: session } = useSession();
  // State for storing user data.
  const [userData, setUserData] = useState<UserData | null>(null);
  // State for storing the loading status.
  const [isLoading, setIsLoading] = useState(false);
  // State for storing any errors that occur during the request.
  const [error, setError] = useState<IErrorResponse | null>(null);

  // useEffect hook to perform side effects in the component.
  // In this case, we want to fetch user data when the component mounts or when the session changes.
  useEffect(() => {
    // Define an asynchronous function to fetch user data.
    const fetchUser = async () => {
      // Extract the accessToken from the session object.
      const token = session?.accessToken;
      // If a token exists, proceed with the data fetching.
      if (token) {
        // Indicate that loading has started.
        setIsLoading(true);
        try {
          // Make a GET request to the server for the user data.
          // Use the Authorization header to provide the access token.
          const response = await axios.get<UserData>("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // If the request is successful, store the user data in state.
          setUserData(response.data);
        } catch (error) {
          // If an error occurs, check if it's an AxiosError with a response object.
          if (axios.isAxiosError(error) && error.response) {
            // If it is, use the error details to set the error state.
            setError({
              message:
                error.response.data.message || "An unknown error occurred",
              status: error.response.status,
            });
          } else {
            // If the error is not an AxiosError with a response, set a generic error message.
            setError({
              message: "An unknown error occurred",
              status: 500, // Use a default error status code.
            });
          }
        } finally {
          // Once the request is complete, successful or not, indicate that loading has finished.
          setIsLoading(false);
        }
      }
    };

    // Call the fetchUser function defined above.
    fetchUser();
  }, [session?.accessToken]); // The effect depends on the accessToken, so it will re-run if the token changes.

  // Return the user data, loading status, and any error from the hook.
  // This allows components that use this hook to access the user data and know when it's loading or if an error occurred.
  return { userData, isLoading, error };
};

// Export the hook so it can be used in other components.
export default useFetchUser;
