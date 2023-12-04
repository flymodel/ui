/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
};

export type Bucket = {
  __typename?: 'Bucket';
  c: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  lastModified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  namespace: Scalars['Int']['output'];
  region: Scalars['String']['output'];
  role: Lifecycle;
  shard: Scalars['Int']['output'];
};

export type CurrentPage = {
  __typename?: 'CurrentPage';
  page: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
};

export enum Lifecycle {
  Prod = 'prod',
  Qa = 'qa',
  Stage = 'stage',
  Test = 'test'
}

export type Mutation = {
  __typename?: 'Mutation';
  rootMutation: Scalars['String']['output'];
};

export type Namespace = {
  __typename?: 'Namespace';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastModified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
};

export type Page = {
  page: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};

export type PaginatedNamespace = {
  __typename?: 'PaginatedNamespace';
  data: Array<Namespace>;
  page: CurrentPage;
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  bucket: Bucket;
  listBuckets: Array<Bucket>;
  namespace: PaginatedNamespace;
};


export type QueryBucketArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListBucketsArgs = {
  namespace: Scalars['Int']['input'];
};


export type QueryNamespaceArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
  page?: InputMaybe<Page>;
};

export type PaginatedNamespacesQueryVariables = Exact<{ [key: string]: never; }>;


export type PaginatedNamespacesQuery = { __typename?: 'Query', namespace: { __typename?: 'PaginatedNamespace', totalPages: number, page: { __typename?: 'CurrentPage', size: number, page: number }, data: Array<{ __typename?: 'Namespace', id: number, name: string, description: string, lastModified: any, createdAt: any }> } };


export const PaginatedNamespacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedNamespaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"namespace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<PaginatedNamespacesQuery, PaginatedNamespacesQueryVariables>;