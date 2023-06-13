import {
  BlogChip,
  BlogDetailContentBody,
  BlogDetailImage,
  BlogHeaderContainer,
} from "@/components/clientUi/blog/blogStyles";
import { CompBody } from "@/styles/globalComponentsStyle";
import { Typography, Stack, Avatar, Divider } from "@mui/material";
import React from "react";

import axios from "axios";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const SingleBlogPostDetail = ({ singleBlogArticle }) => {
  let caption =
    singleBlogArticle.Categories.data.length > 0
      ? singleBlogArticle.Categories.data[0].attributes.name
      : "GENERAL";

  return (
    <>
      {/* {console.log(singleBlogArticle)} */}
      <div style={{ marginTop: "8rem" }}>
        {/* header section of the single blog post  */}
        <CompBody>
          <BlogHeaderContainer>
            <BlogChip>{caption.toUpperCase()}</BlogChip>
            <Typography variant="headlineMainBold">
              {singleBlogArticle.Title}
            </Typography>
            <Stack
              direction={"row"}
              sx={{
                alignitems: "cente",
                justifyContent: "flex-start",
                marginTop: "1rem",
                gap: "1.5rem",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                sx={{ alignitems: "center", justifyContent: "center" }}
              >
                <Avatar sx={{ width: 24, height: 24 }} />
                <Typography variant="label"> Jesica Koch</Typography>
              </Stack>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="label">
                {" "}
                {dayjs(singleBlogArticle.publishedAt).format("MMMM DD YYYY")}
              </Typography>
            </Stack>
          </BlogHeaderContainer>
        </CompBody>

        {/* picture section  */}
        <BlogDetailImage
          src={`http://44.203.73.117:1337${singleBlogArticle.Featured_Image.data.attributes.url}`}
        />

        {/* Blog article details seection  */}
        <CompBody>
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "3rem",
            }}
            spacing={2}
          >
            <BlogDetailContentBody>
              <ReactMarkdown children={singleBlogArticle.Content} />
            </BlogDetailContentBody>
          </Stack>
        </CompBody>
      </div>
    </>
  );
};

export default SingleBlogPostDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const blogArticle = await axios.get(
    `http://44.203.73.117:1337/api/blogs/${params.blogid}?populate=*`
  );

  return {
    props: {
      singleBlogArticle: blogArticle.data.data.attributes,
    },
  };
}

export async function getStaticPaths() {
  const blogArticles = await axios.get(
    "http://44.203.73.117:1337/api/blogs?populate=*"
  );

  let renderPaths = blogArticles.data.data.map((item) => {
    return {
      params: {
        blogid: `${item.id}`,
      },
    };
  });

  return {
    paths: [...renderPaths],
    fallback: "blocking",
  };
}
