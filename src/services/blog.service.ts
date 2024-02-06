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
            html
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
          id
          slug
        }
      }
    `;
    const result = await request<{ categories: BlogType[] }>(graphqlApi, query);
    return result.categories;
  },
  async getDetailedBlogs(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          title
          slug
          excerpt
          image {
            url
          }
          desciption {
            html
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

    const result = await request<{ blog: BlogType }>(graphqlApi, query, {
      slug,
    });
    return result.blog;
  },

  async getDetaieldCateogriesBlog(slug: string) {
    const query = gql`
      query getCategoriesBlog($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          createdAt
          asadbek
          profile {
            url
          }
          category {
            label
            slug
          }
          desciption {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogType[] }>(graphqlApi, query, {
      slug,
    });
    return result.blogs;
  },
};
