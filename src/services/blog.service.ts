import { gql, request } from "graphql-request";
import { BlogType } from "../interfaces/blog.interfaces";

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          title
          slug
          excerpt
          image {
            url
          }
          desciption {
            text
          }
          createdAt
          asadbek
          profile {
            url
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogType[] }>(graphqlApi, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          category
          id
          slug
        }
      }
    `;
    const result = await request<{ categories: BlogType[] }>(graphqlApi, query);
    return result.categories;
  },
};
