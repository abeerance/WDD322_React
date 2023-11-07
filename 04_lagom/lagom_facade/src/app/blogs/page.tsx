// here we will display all the blogs

import BlogClientWrapper from "@/components/blog/blog-client-wrapper";
import MainPage from "@/components/pages/main-page";
import { BlogPost } from "@/types/blog";
import dataFetch from "@/utils/data-fetch";
import { colorsRange, getRandomColor } from "@/utils/get-random-colors";
import Image from "next/image";
import { FC } from "react";

// async function to get all blogs
async function getAllBlogs() {
  return await dataFetch("/api/blogs?populate=heroImage");
}

// CSS class from globals.css
const blogCardClass = "blog-card";

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
          // generate random color
          const randomColor = getRandomColor(colorsRange);

          return (
            <div
              key={blog.id}
              className={`rounded-md overflow-hidden cursor-pointer ${blogCardClass}`}
              style={{
                boxShadow: `7px 7px 0 ${randomColor}`,
                border: `1px solid ${randomColor}`,
                "--shadow-color": randomColor,
              }}
            >
              {/* blog-client-wrapper.tsx */}
              <BlogClientWrapper slug={blog.attributes.slug}>
                <div className='relative h-48'>
                  <Image
                    src={
                      blog.attributes.heroImage.data.attributes.formats.medium
                        .url
                    }
                    fill
                    style={{ objectFit: "cover" }}
                    alt='blog post hero image'
                  />
                </div>
                <div className='h-full px-4 py-6'>
                  <h1 className='line-clamp-2 font-medium text-2xs md:text-xs'>
                    {blog.attributes.title}
                  </h1>
                  <div
                    className='line-clamp-3 text-3xs mt-2'
                    dangerouslySetInnerHTML={{
                      __html: blog.attributes.content,
                    }}
                  />
                </div>
              </BlogClientWrapper>
              {/* blog-client-wrapper.tsx */}
            </div>
          );
        })}
      </div>
    </MainPage>
  );
};

export default Blogs;
