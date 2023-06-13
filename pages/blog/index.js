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

import axios from "axios";

const index = ({ blogPosts }) => {
  return (
    <>
      {/* {console.log("all blog post", blogPosts)} */}
      <BlogHeroContainer>
        <Typography variant="headerMainBold" color={"white"}>
          BLOG
        </Typography>
      </BlogHeroContainer>
      <CompBody>
        <BlogFilterBox />
        <Typography variant="headlineMainBold" marginTop={"4rem"}>
          See Todays Blog Posts
        </Typography>
        <BlogArticleListContainer>
          <BlogArticle blogPosts={blogPosts} />
        </BlogArticleListContainer>
        <PaginationContainer>
          <Pagination count={10} color="primary" />
        </PaginationContainer>
      </CompBody>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const blogArticles = await axios.get(
    "http://44.203.73.117:1337/api/blogs?populate=*"
  );

  return {
    props: {
      blogPosts: blogArticles.data.data,
    },
  };
}
