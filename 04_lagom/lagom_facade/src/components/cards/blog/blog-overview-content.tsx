import { FC } from "react";

type BlogOverviewContentProps = {
  title: string;
  content: string;
};

const BlogOverviewContent: FC<BlogOverviewContentProps> = ({
  title,
  content,
}) => {
  return (
    <div className='h-full px-4 py-6'>
      <h1 className='line-clamp-2 font-medium text-2xs md:text-xs'>{title}</h1>
      <div
        className='line-clamp-3 text-3xs mt-2'
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default BlogOverviewContent;
