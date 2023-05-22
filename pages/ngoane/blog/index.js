import React from "react";
import { CompBody } from "@/styles/globalComponentsStyle";
import {
  BlogHeroContainer,
  BlogArticleListContainer,
  PaginationContainer,
} from "@/components/clientUi/blog/blogStyles";
import { Pagination, Typography } from "@mui/material";
import BlogArticle from "@/components/clientUi/blog/BlogArticle";
import BlogFilterBox from "@/components/clientUi/blog/BlogFilterBox";

const index = () => {
  return (
    <>
      <BlogHeroContainer />
      <CompBody>
        <BlogFilterBox />
        <Typography variant="headlineMainBold" marginTop={"4rem"}>
          See Todays Blog Posts
        </Typography>
        <BlogArticleListContainer>
          <BlogArticle />
        </BlogArticleListContainer>
        <PaginationContainer>
          <Pagination count={10} color="primary" />
        </PaginationContainer>
      </CompBody>
    </>
  );
};

export default index;
