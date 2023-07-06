/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Markdown = {
  __typename: "Markdown";
  contents?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename: "Query";
  markdown?: Maybe<Markdown>;
};

export type MarkdownFragmentFragment = {
  __typename: "Markdown";
  contents?: string | null;
} & { " $fragmentName"?: "MarkdownFragmentFragment" };

export type IndexPageQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageQuery = {
  __typename: "Query";
  markdown?:
    | ({ __typename: "Markdown" } & {
        " $fragmentRefs"?: {
          MarkdownFragmentFragment: MarkdownFragmentFragment;
        };
      })
    | null;
};

export const MarkdownFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MarkdownFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Markdown" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "contents" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MarkdownFragmentFragment, unknown>;
export const IndexPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "IndexPage" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "markdown" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "MarkdownFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MarkdownFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Markdown" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "contents" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IndexPageQuery, IndexPageQueryVariables>;
