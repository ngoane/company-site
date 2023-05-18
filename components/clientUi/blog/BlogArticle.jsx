import React from "react";
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

let dummyArray = [1, 2, 3];

const BlogArticle = () => {
  return (
    <>
      {dummyArray.map((item, key) => {
        return (
          <SingleBlogItemContainer key={key}>
            <Card width={"100%"} elevation={8}>
              <ArticleImage />
              <CardContent>
                <BlogChip>
                  <Typography variant="caption">DIABETES</Typography>
                </BlogChip>
                <Stack spacing={1}>
                  <Typography variant="titleBold">
                    Balance and Healthy Meals
                  </Typography>

                  <Typography variant="body">
                    Did you come here for something in particular or just
                    general Riker-bashing
                  </Typography>
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
                <Typography variant="label"> April 21, 2023</Typography>
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
