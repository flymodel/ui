import { gql } from '@flymodel/graphql';

export const paginatedNamespaces = gql(`
query paginatedNamespaces($page: Int!, $size: Int!, $name: String) {
    namespace(page: {page: $page, size: $size}, name: $name) {
      page {
        size
        page
      }
      totalPages
      totalItems
      data {
        id
        name
        description
        lastModified
        createdAt
      }
    }
}`);
