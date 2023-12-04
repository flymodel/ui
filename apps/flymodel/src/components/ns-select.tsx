import { gql } from '@flymodel/graphql';
import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

const paginatedNamespaces = gql(`
query PaginatedNamespaces {
    namespace {
      page {
        size
        page
      }
      totalPages
      data {
        id
        name
        description
        lastModified
        createdAt
      }
    }
}`);

export const NamespaceSelect = () => {
  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: async () =>
      request(
        '/graphql',
        paginatedNamespaces,
        {}
      ),
  });

  console.log('namespaces', data);
  return <></>;
};
