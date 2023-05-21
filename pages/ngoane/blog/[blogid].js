import {
  BlogChip,
  BlogDetailImage,
} from "@/components/clientUi/blog/blogStyles";
import { CompBody } from "@/styles/globalComponentsStyle";
import { Typography, Stack, Avatar, Divider } from "@mui/material";
import React from "react";

const SingleBlogPostDetail = () => {
  return (
    <div style={{ marginTop: "8rem" }}>
      {/* header section of the single blog post  */}
      <CompBody>
        <BlogChip>Diet</BlogChip>
        <Typography variant="headlineMainBold">
          Food Culture in Ghana and its Impact on Health
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
          <Typography variant="label"> 02 december 2022</Typography>
        </Stack>
      </CompBody>

      {/* picture section  */}
      <BlogDetailImage />

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
          <Typography variant="body" width={"60%"}>
            Ghana is a country rich in culture, traditions, and food. The food
            culture in Ghana is diverse and consists of a variety of local
            dishes made from fresh ingredients. The traditional diet in Ghana is
            centered around staples such as maize, yam, cassava, and plantains,
            along with vegetables and a variety of sauces and spices. Staples
            and Snacks Maize is a staple grain in Ghana and is often consumed in
            the form of kenkey, a popular street food made from fermented maize
            dough. Yam is another staple food in Ghana and is often boiled,
            fried, or roasted. Cassava, a root vegetable, is also widely
            consumed and is often processed into gari, a popular side dish.
            Plantains are a staple food in Ghana and are often used to make
            boiled plantain, plantain chips, and kelewele, a popular street food
            made from ripe plantains.
          </Typography>

          <Typography variant="titleBold" width={"60%"}>
            Food Varieties in Ghana
          </Typography>
        </Stack>
      </CompBody>
    </div>
  );
};

export default SingleBlogPostDetail;
