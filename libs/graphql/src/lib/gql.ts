/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\nquery namespaceModels ($id: Int!, $size: Int!, $page: Int!){\n    namespace(id: [$id]) {\n      data {\n        models(page: {size: $size, page: $page}) {\n          totalPages\n          totalItems\n          page {\n            size\n            page\n          }\n          data {\n            id\n            name\n            modelVersions {\n              totalItems\n            }\n            lastModified\n          }\n        }\n      }\n    }\n}':
    types.NamespaceModelsDocument,
  '\nquery numberNamespaces { \n    namespace {\n        totalItems\n    }\n}':
    types.NumberNamespacesDocument,
  '\nquery paginatedNamespaces($page: Int!, $size: Int!, $name: String) {\n    namespace(page: {page: $page, size: $size}, name: $name) {\n      page {\n        size\n        page\n      }\n      totalPages\n      totalItems\n      data {\n        id\n        name\n        description\n        lastModified\n        createdAt\n      }\n    }\n}':
    types.PaginatedNamespacesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery namespaceModels ($id: Int!, $size: Int!, $page: Int!){\n    namespace(id: [$id]) {\n      data {\n        models(page: {size: $size, page: $page}) {\n          totalPages\n          totalItems\n          page {\n            size\n            page\n          }\n          data {\n            id\n            name\n            modelVersions {\n              totalItems\n            }\n            lastModified\n          }\n        }\n      }\n    }\n}'
): (typeof documents)['\nquery namespaceModels ($id: Int!, $size: Int!, $page: Int!){\n    namespace(id: [$id]) {\n      data {\n        models(page: {size: $size, page: $page}) {\n          totalPages\n          totalItems\n          page {\n            size\n            page\n          }\n          data {\n            id\n            name\n            modelVersions {\n              totalItems\n            }\n            lastModified\n          }\n        }\n      }\n    }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery numberNamespaces { \n    namespace {\n        totalItems\n    }\n}'
): (typeof documents)['\nquery numberNamespaces { \n    namespace {\n        totalItems\n    }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery paginatedNamespaces($page: Int!, $size: Int!, $name: String) {\n    namespace(page: {page: $page, size: $size}, name: $name) {\n      page {\n        size\n        page\n      }\n      totalPages\n      totalItems\n      data {\n        id\n        name\n        description\n        lastModified\n        createdAt\n      }\n    }\n}'
): (typeof documents)['\nquery paginatedNamespaces($page: Int!, $size: Int!, $name: String) {\n    namespace(page: {page: $page, size: $size}, name: $name) {\n      page {\n        size\n        page\n      }\n      totalPages\n      totalItems\n      data {\n        id\n        name\n        description\n        lastModified\n        createdAt\n      }\n    }\n}'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
