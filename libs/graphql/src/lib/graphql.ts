/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any };
};

export type Bucket = {
  __typename?: 'Bucket';
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
  Test = 'test',
}

export type Model = {
  __typename?: 'Model';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  lastModified: Scalars['DateTime']['output'];
  modelVersions: PaginatedModelVersions;
  name: Scalars['String']['output'];
  namespace?: Maybe<Namespace>;
  namespaceId: Scalars['Int']['output'];
};

export type ModelModelVersionsArgs = {
  page?: InputMaybe<Page>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type ModelVersion = {
  __typename?: 'ModelVersion';
  id: Scalars['Int']['output'];
  modelId: Scalars['Int']['output'];
  version: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  rootMutation: Scalars['String']['output'];
};

export type Namespace = {
  __typename?: 'Namespace';
  buckets: PaginatedBucket;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastModified: Scalars['DateTime']['output'];
  models: PaginatedModels;
  name: Scalars['String']['output'];
};

export type NamespaceBucketsArgs = {
  page?: InputMaybe<Page>;
};

export type NamespaceModelsArgs = {
  page?: InputMaybe<Page>;
};

export type Page = {
  page: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};

export type PaginatedBucket = {
  __typename?: 'PaginatedBucket';
  data: Array<Bucket>;
  page: CurrentPage;
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedModelVersions = {
  __typename?: 'PaginatedModelVersions';
  data: Array<ModelVersion>;
  page: CurrentPage;
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedModels = {
  __typename?: 'PaginatedModels';
  data: Array<Model>;
  page: CurrentPage;
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PaginatedNamespaces = {
  __typename?: 'PaginatedNamespaces';
  data: Array<Namespace>;
  page: CurrentPage;
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  bucket: PaginatedBucket;
  model: PaginatedModels;
  namespace: PaginatedNamespaces;
};

export type QueryBucketArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
  namespace?: InputMaybe<Array<Scalars['Int']['input']>>;
  page?: InputMaybe<Page>;
  role?: InputMaybe<Array<Lifecycle>>;
};

export type QueryModelArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  namespace?: InputMaybe<Array<Scalars['Int']['input']>>;
  page?: InputMaybe<Page>;
  role?: InputMaybe<Array<Lifecycle>>;
};

export type QueryNamespaceArgs = {
  id?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Page>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type NamespaceModelsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
}>;

export type NamespaceModelsQuery = {
  __typename?: 'Query';
  namespace: {
    __typename?: 'PaginatedNamespaces';
    data: Array<{
      __typename?: 'Namespace';
      models: {
        __typename?: 'PaginatedModels';
        totalPages: number;
        totalItems: number;
        page: { __typename?: 'CurrentPage'; size: number; page: number };
        data: Array<{
          __typename?: 'Model';
          id: number;
          name: string;
          lastModified: any;
          modelVersions: {
            __typename?: 'PaginatedModelVersions';
            totalItems: number;
          };
        }>;
      };
    }>;
  };
};

export type NumberNamespacesQueryVariables = Exact<{ [key: string]: never }>;

export type NumberNamespacesQuery = {
  __typename?: 'Query';
  namespace: { __typename?: 'PaginatedNamespaces'; totalItems: number };
};

export type PaginatedNamespacesQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;

export type PaginatedNamespacesQuery = {
  __typename?: 'Query';
  namespace: {
    __typename?: 'PaginatedNamespaces';
    totalPages: number;
    totalItems: number;
    page: { __typename?: 'CurrentPage'; size: number; page: number };
    data: Array<{
      __typename?: 'Namespace';
      id: number;
      name: string;
      description: string;
      lastModified: any;
      createdAt: any;
    }>;
  };
};

export const NamespaceModelsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'namespaceModels' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'size' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'namespace' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'ListValue',
                  values: [
                    { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'models' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'page' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'size' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'size' },
                                  },
                                },
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'page' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'page' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalPages' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalItems' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'page' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'size' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'page' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'data' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'modelVersions',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'totalItems',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'lastModified',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NamespaceModelsQuery,
  NamespaceModelsQueryVariables
>;
export const NumberNamespacesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'numberNamespaces' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'namespace' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'totalItems' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  NumberNamespacesQuery,
  NumberNamespacesQueryVariables
>;
export const PaginatedNamespacesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'paginatedNamespaces' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'size' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'namespace' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'page' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'page' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'size' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'size' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'name' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'page' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'totalPages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalItems' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastModified' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PaginatedNamespacesQuery,
  PaginatedNamespacesQueryVariables
>;
