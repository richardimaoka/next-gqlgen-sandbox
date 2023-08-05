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

export type ColumnVerticalPosition = "BOTTOM" | "CENTER" | "TOP";

export type ColumnWrapper = {
  __typename: "ColumnWrapper";
  column?: Maybe<Column>;
  index?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type FileHighlight = {
  __typename: "FileHighlight";
  fromLine?: Maybe<Scalars["Int"]["output"]>;
  toLine?: Maybe<Scalars["Int"]["output"]>;
};

export type FileNode = {
  __typename: "FileNode";
  filePath?: Maybe<Scalars["String"]["output"]>;
  isUpdated?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  nodeType?: Maybe<FileNodeType>;
  offset?: Maybe<Scalars["Int"]["output"]>;
};

export type FileNodeType = "DIRECTORY" | "FILE";

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
  contentsPosition?: Maybe<ColumnVerticalPosition>;
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
  step?: Maybe<Scalars["String"]["output"]>;
};

export type MarkdownAlignment = "CENTER" | "LEFT";

export type MarkdownColumn = Column & {
  __typename: "MarkdownColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  contentsPosition?: Maybe<ColumnVerticalPosition>;
  description?: Maybe<Markdown>;
};

export type MarkdownOld = {
  __typename: "MarkdownOld";
  contents?: Maybe<Scalars["String"]["output"]>;
  step?: Maybe<Scalars["String"]["output"]>;
};

export type Modal = {
  __typename: "Modal";
  position?: Maybe<ModalPosition>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type ModalPosition = "BOTTOM" | "CENTER" | "TOP";

export type NextAction = {
  __typename: "NextAction";
  markdown?: Maybe<MarkdownOld>;
  terminalCommand?: Maybe<TerminalCommand>;
  terminalName?: Maybe<Scalars["String"]["output"]>;
};

export type OpenFile = {
  __typename: "OpenFile";
  content?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  filePath?: Maybe<Scalars["String"]["output"]>;
  highlight?: Maybe<Array<Maybe<FileHighlight>>>;
  isFullContent?: Maybe<Scalars["Boolean"]["output"]>;
  language?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Float"]["output"]>;
};

export type Page = {
  __typename: "Page";
  columns?: Maybe<Array<Maybe<ColumnWrapper>>>;
  focusColumn?: Maybe<Scalars["String"]["output"]>;
  modal?: Maybe<Modal>;
  nextStep?: Maybe<Scalars["String"]["output"]>;
  prevStep?: Maybe<Scalars["String"]["output"]>;
  step?: Maybe<Scalars["String"]["output"]>;
};

export type PageState = {
  __typename: "PageState";
  markdown?: Maybe<MarkdownOld>;
  nextAction?: Maybe<NextAction>;
  nextStep?: Maybe<Scalars["String"]["output"]>;
  prevStep?: Maybe<Scalars["String"]["output"]>;
  sourceCode?: Maybe<SourceCode>;
  step?: Maybe<Scalars["String"]["output"]>;
  terminals?: Maybe<Array<Maybe<Terminal>>>;
};

export type Query = {
  __typename: "Query";
  page?: Maybe<Page>;
  pageState?: Maybe<PageState>;
};

export type QueryPageArgs = {
  step?: InputMaybe<Scalars["String"]["input"]>;
  tutorial: Scalars["String"]["input"];
};

export type QueryPageStateArgs = {
  step?: InputMaybe<Scalars["String"]["input"]>;
};

export type SourceCode = {
  __typename: "SourceCode";
  fileTree?: Maybe<Array<Maybe<FileNode>>>;
  openFile?: Maybe<OpenFile>;
  step?: Maybe<Scalars["String"]["output"]>;
};

export type SourceCodeOpenFileArgs = {
  filePath?: InputMaybe<Scalars["String"]["input"]>;
};

export type SourceCodeColumn = Column & {
  __typename: "SourceCodeColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  sourceCode?: Maybe<SourceCode>;
};

export type Terminal = {
  __typename: "Terminal";
  currentDirectory?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  nodes?: Maybe<Array<Maybe<TerminalNode>>>;
  step?: Maybe<Scalars["String"]["output"]>;
};

export type TerminalColumn = Column & {
  __typename: "TerminalColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
  terminal?: Maybe<Terminal>;
};

export type TerminalCommand = {
  __typename: "TerminalCommand";
  beforeExecution?: Maybe<Scalars["Boolean"]["output"]>;
  command?: Maybe<Scalars["String"]["output"]>;
};

export type TerminalElement = TerminalCommand | TerminalOutput;

export type TerminalNode = {
  __typename: "TerminalNode";
  content?: Maybe<TerminalElement>;
};

export type TerminalOutput = {
  __typename: "TerminalOutput";
  output?: Maybe<Scalars["String"]["output"]>;
};

export type FileNodeComponent_FragmentFragment = ({
  __typename: "FileNode";
  nodeType?: FileNodeType | null;
  name?: string | null;
  filePath?: string | null;
  offset?: number | null;
  isUpdated?: boolean | null;
} & {
  " $fragmentRefs"?: {
    FileNodeIcon_FragmentFragment: FileNodeIcon_FragmentFragment;
  };
}) & { " $fragmentName"?: "FileNodeComponent_FragmentFragment" };

export type FileNodeIcon_FragmentFragment = {
  __typename: "FileNode";
  nodeType?: FileNodeType | null;
} & { " $fragmentName"?: "FileNodeIcon_FragmentFragment" };

export const FileNodeIcon_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNodeIcon_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FileNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileNodeIcon_FragmentFragment, unknown>;
export const FileNodeComponent_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNodeComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FileNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileNodeIcon_Fragment" },
          },
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "filePath" } },
          { kind: "Field", name: { kind: "Name", value: "offset" } },
          { kind: "Field", name: { kind: "Name", value: "isUpdated" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNodeIcon_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "FileNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "nodeType" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileNodeComponent_FragmentFragment, unknown>;
