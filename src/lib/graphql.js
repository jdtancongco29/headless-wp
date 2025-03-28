import { request, gql } from 'graphql-request';

const WP_GRAPHQL_URL = 'http://headless-training.test/graphql';

export const getPosts = async () => {
  const query = gql`
    query {
      posts {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  return request(WP_GRAPHQL_URL, query);
};

export const getHome = async () => {
  const query = gql`
    query getHome($id: ID = "home") {
      page(id: $id, idType: URI) {
        featuredImage {
          node {
            altText
            file
            title
            sourceUrl
          }
        }
        title
        slug
        uri
        location {
          location
        }
        content
      }
    }
  `;
  return request(WP_GRAPHQL_URL, query);
};

export const getThemeSettings = async () => {
  const query = gql`
    query getThemeSettings {
      themeGeneralSettings {
        header {
          header {
            headerLogo {
              node {
                title
                uri
                sourceUrl
                altText
              }
            }
            headerMenu {
              name
              slug
            }
          }
        }
      }
    }
  `;
  return request(WP_GRAPHQL_URL, query);
};