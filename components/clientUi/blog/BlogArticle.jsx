import React, { useState, useEffect } from "react";
import {
  SingleBlogItemContainer,
  ArticleImage,
  BlogChip,
  BlogCardFooter,
} from "./blogStyles";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";

import dayjs from "dayjs";

const BlogArticle = ({ blogPosts }) => {
  return (
    <>
      {console.log(blogPosts)}

      {blogPosts.length > 0 &&
        blogPosts.map((item) => {
          let caption =
            item.attributes.Categories.data.length > 0
              ? item.attributes.Categories.data[0].attributes.name
              : "GENERAL";

          let titleandbody = item.attributes.Title.split(":");
          return (
            <SingleBlogItemContainer key={item.id} href={`/blog/${item.id}`}>
              <Card width={"100%"} elevation={8}>
                <ArticleImage
                  image={`http://44.203.73.117:1337${item.attributes.Featured_Image.data.attributes.url}`}
                />
                <CardContent>
                  <BlogChip>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "uppercase" }}
                    >
                      {caption}
                    </Typography>
                  </BlogChip>
                  <Stack spacing={1}>
                    <Typography variant="titleBold">
                      {titleandbody[0]}
                    </Typography>

                    <Typography variant="body">{titleandbody[1]}</Typography>
                  </Stack>
                </CardContent>
                <BlogCardFooter>
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
                    {dayjs(item.attributes.publishedAt).format("MMMM DD YYYY")}
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography variant="label"> 3 min. read</Typography>
                </BlogCardFooter>
              </Card>
            </SingleBlogItemContainer>
          );
        })}
    </>
  );
};

export default BlogArticle;
