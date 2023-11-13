export type BlogPost = {
  id: number;
  attributes: {
    title: string;
    publishedAt: string;
    content: string;
    uuid: string;
    slug: string;
    heroImage: {
      data: {
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
    };
  };
};

export type Blog = {
  data: BlogPost[];
};
