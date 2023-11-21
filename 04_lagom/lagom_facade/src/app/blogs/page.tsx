// here we will display all the blogs

import BlogPostCard from "@/components/cards/blog/blog-post-card";
import MainPage from "@/components/pages/main-page";
import { BlogPost } from "@/types/blog";
import dataFetch from "@/utils/data-fetch";
import { FC } from "react";

// async function to get all blogs
async function getAllBlogs() {
  return await dataFetch("/api/blogs?populate=heroImage");
}

// async component which can call the function above
const Blogs: FC = async () => {
  // here we call the async fetch function
  const data = await getAllBlogs();

  return (
    <MainPage additionalClasses='items-center'>
      {/* grid container */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6'>
        {/* array mapping von data.data */}
        {/* die einzelnen blogs haben den typ BlogPost */}
        {/*
        1. Möglichkeit:
            data.data.map((item) => (<div>{item.title}</div>)))

        2. Möglichkeit:
            data.data.map((item) => {
                console.log(item);
                return (
                    <div>{item.title}</div>
                )
            })
        */}
        {/* {data.data.map(() => (
          <></>
        ))} */}
        {data.data.map((blog: BlogPost) => {
          return (
            <BlogPostCard
              key={blog.id}
              slug={blog.attributes.slug}
              imageUrl={
                blog.attributes.heroImage.data.attributes.formats.medium.url
              }
              title={blog.attributes.title}
              content={blog.attributes.content}
            />
          );
        })}
      </div>
    </MainPage>
  );
};

export default Blogs;
