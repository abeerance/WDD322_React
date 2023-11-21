export enum shirtColor {
  WHITE = "white",
  BLACK = "black",
  GREEN = "green",
  BLUE = "blue",
  RED = "red",
  BROWN = "brown",
  BEIGE = "beige",
  GRAY = "gray",
}

type ShirtImage = {
  id: number;
  attributes: {
    name: string;
    url: string;
    width: number;
    heigth: number;
    formats: {
      large: { url: string; width: number; heigth: number };
      medium: { url: string; width: number; heigth: number };
      small: { url: string; width: number; heigth: number };
      thumbnail: { url: string; width: number; heigth: number };
    };
  };
};

export type Shirt = {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    Color: string;
    Brand: string;
    slug: string;
    Images: {
      data: ShirtImage[];
    };
  };
};

export type ShirtContent = {
  data: Shirt[];
};
