import React from "react";
import { CompBody } from "@/styles/globalComponentsStyle";
import {
  BlogHeroContainer,
  BlogArticleListContainer,
} from "@/components/blog/blogStyles";
import { Typography } from "@mui/material";
import BlogArticle from "@/components/blog/BlogArticle";

const index = () => {
  return (
    <>
      <BlogHeroContainer />
      <CompBody>
        <Typography variant="headerMainBold" marginTop={"4rem"}>
          See Todays Blog Posts
        </Typography>
        <BlogArticleListContainer>
          <BlogArticle />
        </BlogArticleListContainer>
      </CompBody>
    </>
  );
};

export default index;
