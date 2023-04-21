import styled from "@emotion/styled";
import { CardMedia, Stack } from "@mui/material";

export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background-color: lightgray;
`;

export const BlogHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const BlogArticleListContainer = styled(Stack)`
  width: 100%;
  margin-top: 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SingleBlogItemContainer = styled.div`
  width: 33%;
`;

export const ArticleImage = styled(CardMedia)`
  width: 100%;
  height: 15rem;
  background-color: lightblue;
`;
