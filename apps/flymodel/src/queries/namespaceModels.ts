import { gql } from '@flymodel/graphql';

export const namespaceModels = gql(`
query namespaceModels ($id: Int!, $size: Int!, $page: Int!){
    namespace(id: [$id]) {
      data {
        models(page: {size: $size, page: $page}) {
          totalPages
          totalItems
          page {
            size
            page
          }
          data {
            id
            name
            modelVersions {
              totalItems
            }
            lastModified
          }
        }
      }
    }
}`);
