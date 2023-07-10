/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  fragment BackgroundImageColumnFragment on BackgroundImageColumn {\n    width\n    height\n    path\n    modal {\n      ...ModalFrameFragment\n    }\n  }\n":
    types.BackgroundImageColumnFragmentFragmentDoc,
  "\n  fragment ColumnWrapperFragment on ColumnWrapper {\n    column {\n      ... on ImageDescriptionColumn {\n        ...ImageDescriptionColumnFragment\n      }\n      ... on BackgroundImageColumn {\n        ...BackgroundImageColumnFragment\n      }\n    }\n  }\n":
    types.ColumnWrapperFragmentFragmentDoc,
  "\n  fragment ImageCenteredFragment on ImageCentered {\n    width\n    height\n    path\n  }\n":
    types.ImageCenteredFragmentFragmentDoc,
  "\n  fragment ImageDescriptionColumnFragment on ImageDescriptionColumn {\n    description {\n      ...MarkdownFragment\n    }\n    image {\n      ...ImageCenteredFragment\n    }\n    order\n  }\n":
    types.ImageDescriptionColumnFragmentFragmentDoc,
  "\n  fragment MarkdownFragment on Markdown {\n    contents\n  }\n":
    types.MarkdownFragmentFragmentDoc,
  "\n  fragment ModalFrameFragment on Modal {\n    text\n    position\n  }\n":
    types.ModalFrameFragmentFragmentDoc,
  "\n  query IndexPage($tutorial: String!, $step: String) {\n    page(tutorial: $tutorial, step: $step) {\n      step\n      nextStep\n      prevStep\n      columns {\n        ...ColumnWrapperFragment\n      }\n    }\n  }\n":
    types.IndexPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BackgroundImageColumnFragment on BackgroundImageColumn {\n    width\n    height\n    path\n    modal {\n      ...ModalFrameFragment\n    }\n  }\n",
): (typeof documents)["\n  fragment BackgroundImageColumnFragment on BackgroundImageColumn {\n    width\n    height\n    path\n    modal {\n      ...ModalFrameFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ColumnWrapperFragment on ColumnWrapper {\n    column {\n      ... on ImageDescriptionColumn {\n        ...ImageDescriptionColumnFragment\n      }\n      ... on BackgroundImageColumn {\n        ...BackgroundImageColumnFragment\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ColumnWrapperFragment on ColumnWrapper {\n    column {\n      ... on ImageDescriptionColumn {\n        ...ImageDescriptionColumnFragment\n      }\n      ... on BackgroundImageColumn {\n        ...BackgroundImageColumnFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ImageCenteredFragment on ImageCentered {\n    width\n    height\n    path\n  }\n",
): (typeof documents)["\n  fragment ImageCenteredFragment on ImageCentered {\n    width\n    height\n    path\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ImageDescriptionColumnFragment on ImageDescriptionColumn {\n    description {\n      ...MarkdownFragment\n    }\n    image {\n      ...ImageCenteredFragment\n    }\n    order\n  }\n",
): (typeof documents)["\n  fragment ImageDescriptionColumnFragment on ImageDescriptionColumn {\n    description {\n      ...MarkdownFragment\n    }\n    image {\n      ...ImageCenteredFragment\n    }\n    order\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment MarkdownFragment on Markdown {\n    contents\n  }\n",
): (typeof documents)["\n  fragment MarkdownFragment on Markdown {\n    contents\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ModalFrameFragment on Modal {\n    text\n    position\n  }\n",
): (typeof documents)["\n  fragment ModalFrameFragment on Modal {\n    text\n    position\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query IndexPage($tutorial: String!, $step: String) {\n    page(tutorial: $tutorial, step: $step) {\n      step\n      nextStep\n      prevStep\n      columns {\n        ...ColumnWrapperFragment\n      }\n    }\n  }\n",
): (typeof documents)["\n  query IndexPage($tutorial: String!, $step: String) {\n    page(tutorial: $tutorial, step: $step) {\n      step\n      nextStep\n      prevStep\n      columns {\n        ...ColumnWrapperFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
