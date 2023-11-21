import { CardContentType } from "@/types/enum";
import { colorsRange, getRandomColor } from "@/utils/get-random-colors";
import { FC } from "react";
import CardSlugClientWrapper from "../../common/blog-client-wrapper";
import LagomImage from "../../common/lagom-image";
import BlogOverviewContent from "./blog-overview-content";

type BlogPostCardProps = {
  slug: string;
  imageUrl: string;
  title: string;
  content: string;
};

// CSS class from globals.css
const blogCardClass = "blog-card";

const BlogPostCard: FC<BlogPostCardProps> = ({
  slug,
  imageUrl,
  title,
  content,
}) => {
  // generate random color
  const randomColor = getRandomColor(colorsRange);

  return (
    <div
      className={`rounded-md overflow-hidden cursor-pointer ${blogCardClass}`}
      style={{
        boxShadow: `7px 7px 0 ${randomColor}`,
        border: `1px solid ${randomColor}`,
        "--shadow-color": randomColor,
      }}
    >
      <CardSlugClientWrapper
        slug={slug}
        cardContentType={CardContentType.BLOGS}
      >
        <LagomImage
          additionalClasses='h-48'
          imageUrl={imageUrl}
          alt='blog post hero image'
        />
        <BlogOverviewContent title={title} content={content} />
      </CardSlugClientWrapper>
    </div>
  );
};

export default BlogPostCard;
