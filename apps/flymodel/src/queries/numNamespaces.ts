import { gql } from '@flymodel/graphql';

export const numberNamespaces = gql(`
query numberNamespaces { 
    namespace {
        totalItems
    }
}`);
