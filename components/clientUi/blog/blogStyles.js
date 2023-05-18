import styled from "@emotion/styled";
import { CardMedia, Chip, Paper, Stack } from "@mui/material";

// Blog hero section styled
export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background-color: lightgray;
`;

export const BlogHeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

// Blog filter styles

export const FilterContainer = styled(Stack)`
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  margin: 4rem 0rem;
`;
export const FilterItemBox = styled(Stack)`
  width: 33.3%;
`;

export const SearchItemBox = styled(Paper)`
  width: 33.3%;
  background-color: white;
`;

// Blog article section styles
export const BlogArticleListContainer = styled(Stack)`
  width: 100%;
  margin-top: 4rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const SingleBlogItemContainer = styled.div`
  width: 32%;
`;

export const ArticleImage = styled(CardMedia)`
  width: 100%;
  height: 15rem;
  background-color: lightblue;
`;

export const BlogChip = styled.div`
  width: min-content;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 1rem 0rem;
  background-color: ${({ theme }) => theme.palette.violetBg};
`;

export const BlogCardFooter = styled(Stack)`
  padding: 1rem 1rem 2rem 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const PaginationContainer = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5rem 0rem 15rem 0rem;
`;

// Blog single post details styles
export const BlogDetailImage = styled.img`
  width: 100%;
  height: 20rem;
  margin-top: 3rem;
  background-color: lightgray;
  border-radius: 1rem;
  object-fit: cover;
`;
