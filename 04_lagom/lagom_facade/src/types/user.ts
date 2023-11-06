// define the structure of the user data we expect from the API.
// this includes the user object with its properties and nested
// avatar object
export interface UserData {
  user: {
    id: number;
    username: string;
    email: string;
    avatar: {
      id: number;
      height: number;
      width: number;
      url: string;
      formats: {
        large: { height: number; width: number; url: string };
        medium: { height: number; width: number; url: string };
        small: { height: number; width: number; url: string };
        thumbnail: { height: number; width: number; url: string };
      };
    };
  };
}
