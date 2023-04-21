import React from "react";
import { SingleBlogItemContainer, ArticleImage } from "./blogStyles";
import { Card } from "@mui/material";

const BlogArticle = () => {
  return (
    <>
      <SingleBlogItemContainer>
        <Card width={"100%"}>
          <ArticleImage />
        </Card>
      </SingleBlogItemContainer>
    </>
  );
};

export default BlogArticle;
