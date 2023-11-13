import LagomImage from "@/components/common/lagom-image";
import MainPage from "@/components/pages/main-page";
import { Blog } from "@/types/blog";
import dataFetch from "@/utils/data-fetch";
import { FC } from "react";

// props for the blog page
// with this you can get the params from the url
// in a function component
type BlogProps = {
  params: {
    slug: string;
  };
};

// asyunc function to get a single blog
// the url will differ depending on your api
// the populate hero image as well as the URL string
// in this example is dependant on strapi
// and it will look different for other headless CMS / custom CMS
async function getBlog(slug: string) {
  return await dataFetch(
    `/api/blogs?filters[slug][$eq]=${slug}&populate=heroImage`
  );
}

// async component which can call the function above
const Blog: FC<BlogProps> = async ({ params }) => {
  // get the blog
  const data: Blog = await getBlog(params.slug);

  // save the blog content into another variable
  // to make it easier to work with
  // this will also most likely differ in your project
  const blogContent = data.data[0].attributes;

  return (
    <MainPage>
      <div className='py-6 md:py-10'>
        <h1 className='text-s sm:text-sm md:text-md lg:text-lg font-semibold'>
          {blogContent.title}
        </h1>
        <LagomImage
          additionalClasses='h-44 sm:h-72 md:h-96 rounded-md overflow-hidden max-w-5xl my-6 md:my-10'
          imageUrl={blogContent.heroImage.data.attributes.formats.large.url}
          alt="blog's hero image"
        />
        <div
          className='blog-content'
          dangerouslySetInnerHTML={{
            __html: blogContent.content,
          }}
        />
      </div>
    </MainPage>
  );
};

export default Blog;
