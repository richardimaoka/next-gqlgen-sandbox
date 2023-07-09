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

export type BackgroundImageColumn = Column & {
  __typename: "BackgroundImageColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  modal?: Maybe<Modal>;
  path?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type Column = {
  _placeholder?: Maybe<Scalars["String"]["output"]>;
};

export type ColumnWrapper = {
  __typename: "ColumnWrapper";
  column?: Maybe<Column>;
  index?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageCentered = {
  __typename: "ImageCentered";
  height?: Maybe<Scalars["Int"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type ImageDescriptionColumn = Column & {
  __typename: "ImageDescriptionColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Markdown>;
  image?: Maybe<ImageCentered>;
  order?: Maybe<ImageDescriptionOrder>;
};

export type ImageDescriptionOrder =
  | "DESCRIPTION_THEN_IMAGE"
  | "IMAGE_THEN_DESCRIPTION";

export type Markdown = {
  __typename: "Markdown";
  alignment?: Maybe<MarkdownAlignment>;
  contents?: Maybe<Scalars["String"]["output"]>;
};

export type MarkdownAlignment = "CENTER" | "LEFT";

export type MarkdownColumn = Column & {
  __typename: "MarkdownColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Markdown>;
};

export type Modal = {
  __typename: "Modal";
  position?: Maybe<ModalPosition>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type ModalPosition = "BOTTOM" | "CENTER" | "TOP";

export type PageState = {
  __typename: "PageState";
  columns?: Maybe<Array<Maybe<ColumnWrapper>>>;
  nextStep?: Maybe<Scalars["String"]["output"]>;
  prevStep?: Maybe<Scalars["String"]["output"]>;
  step?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename: "Query";
  backgroundImageColumn?: Maybe<BackgroundImageColumn>;
  columns?: Maybe<Array<Maybe<ColumnWrapper>>>;
  imageDescriptionColumn?: Maybe<ImageDescriptionColumn>;
  markdownColumn?: Maybe<MarkdownColumn>;
  page?: Maybe<PageState>;
};

export type QueryPageArgs = {
  step?: InputMaybe<Scalars["String"]["input"]>;
  tutorial: Scalars["String"]["input"];
};

export type ImageCenteredFragmentFragment = {
  __typename: "ImageCentered";
  width?: number | null;
  height?: number | null;
  path?: string | null;
} & { " $fragmentName"?: "ImageCenteredFragmentFragment" };

export type ImageDescriptionColumnFragmentFragment = {
  __typename: "ImageDescriptionColumn";
  order?: ImageDescriptionOrder | null;
  description?:
    | ({ __typename: "Markdown" } & {
        " $fragmentRefs"?: {
          MarkdownFragmentFragment: MarkdownFragmentFragment;
        };
      })
    | null;
  image?:
    | ({ __typename: "ImageCentered" } & {
        " $fragmentRefs"?: {
          ImageCenteredFragmentFragment: ImageCenteredFragmentFragment;
        };
      })
    | null;
} & { " $fragmentName"?: "ImageDescriptionColumnFragmentFragment" };

export type MarkdownFragmentFragment = {
  __typename: "Markdown";
  contents?: string | null;
} & { " $fragmentName"?: "MarkdownFragmentFragment" };

export type IndexPageQueryVariables = Exact<{
  tutorial: Scalars["String"]["input"];
  step?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type IndexPageQuery = {
  __typename: "Query";
  page?: {
    __typename: "PageState";
    step?: string | null;
    nextStep?: string | null;
    prevStep?: string | null;
    columns?: Array<{
      __typename: "ColumnWrapper";
      column?:
        | { __typename: "BackgroundImageColumn" }
        | { __typename: "ImageDescriptionColumn" }
        | { __typename: "MarkdownColumn" }
        | null;
    } | null> | null;
  } | null;
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
export const ImageCenteredFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageCenteredFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageCentered" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "path" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageCenteredFragmentFragment, unknown>;
export const ImageDescriptionColumnFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageDescriptionColumnFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageDescriptionColumn" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "description" },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "image" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageCenteredFragment" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "order" } },
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
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageCenteredFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ImageCentered" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "path" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageDescriptionColumnFragmentFragment, unknown>;
export const IndexPageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "IndexPage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tutorial" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "step" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "page" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "tutorial" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tutorial" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "step" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "step" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "step" } },
                { kind: "Field", name: { kind: "Name", value: "nextStep" } },
                { kind: "Field", name: { kind: "Name", value: "prevStep" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "columns" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "column" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
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
} as unknown as DocumentNode<IndexPageQuery, IndexPageQueryVariables>;
