import { gql, request } from "graphql-request";
import { BlogType } from "../interfaces/blog.interfaces";

const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          id
          createdAt
          desciption {
            text
          }
          slug
          createdBy {
            name
            picture
            id
          }
          excerpt
        }
      }
    `;
    const result = await request<{ blogs: BlogType }>(graphqlApi, query);
    return result.blogs;
  },
};
