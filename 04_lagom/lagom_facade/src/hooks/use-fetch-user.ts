import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// define the structure of the expected error object, if needed
interface IErrorResponse {
  response: {
    data: {
      message: string;
    };
    status: number;
  };
}

const useFetchUser = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = session?.accessToken;
      // check if accessToken is available
      if (token) {
        // set loading to true
        setIsLoading(true);
        // fetch user data from Next.js route
        try {
          const response = await axios.get("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // set user data
          setUser(response.data);
        } catch (error) {
          // check if error is of type IErrorResponse, then set error state
          if (axios.isAxiosError(error) && error.response) {
            setError(
              error.response.data.message || "An unknown error occurred"
            );
          } else {
            setError("An unknown error occurred");
          }
        } finally {
          // set loading to false
          setIsLoading(false);
        }
      }
    };

    fetchUser();
  }, [session?.accessToken]);

  // return user, isLoading, and error
  return { user, isLoading, error };
};

export default useFetchUser;
