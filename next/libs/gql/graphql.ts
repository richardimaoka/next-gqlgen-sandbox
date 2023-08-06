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

export type BrowserColumn = Column & {
  __typename: "BrowserColumn";
  _placeholder?: Maybe<Scalars["String"]["output"]>;
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
  sourceCode?: Maybe<SourceCode>;
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
  projectDir?: Maybe<Scalars["String"]["output"]>;
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

export type ColumnHeader_FragmentFragment = ({ __typename: "Page" } & {
  " $fragmentRefs"?: {
    ColumnTabs_FragmentFragment: ColumnTabs_FragmentFragment;
  };
}) & { " $fragmentName"?: "ColumnHeader_FragmentFragment" };

export type ColumnTab_FragmentFragment = {
  __typename: "ColumnWrapper";
  name?: string | null;
  column?:
    | { __typename: "BackgroundImageColumn" }
    | { __typename: "BrowserColumn" }
    | { __typename: "ImageDescriptionColumn" }
    | { __typename: "MarkdownColumn" }
    | { __typename: "SourceCodeColumn" }
    | { __typename: "TerminalColumn" }
    | null;
} & { " $fragmentName"?: "ColumnTab_FragmentFragment" };

export type ColumnTabs_FragmentFragment = {
  __typename: "Page";
  columns?: Array<
    | ({ __typename: "ColumnWrapper"; name?: string | null } & {
        " $fragmentRefs"?: {
          ColumnTab_FragmentFragment: ColumnTab_FragmentFragment;
        };
      })
    | null
  > | null;
} & { " $fragmentName"?: "ColumnTabs_FragmentFragment" };

export type ColumnWrapperComponent_FragmentFragment = {
  __typename: "ColumnWrapper";
  name?: string | null;
  column?:
    | { __typename: "BackgroundImageColumn" }
    | { __typename: "BrowserColumn" }
    | { __typename: "ImageDescriptionColumn" }
    | { __typename: "MarkdownColumn" }
    | { __typename: "SourceCodeColumn" }
    | { __typename: "TerminalColumn" }
    | null;
} & { " $fragmentName"?: "ColumnWrapperComponent_FragmentFragment" };

export type VisibleColumn_FragmentFragment = ({
  __typename: "Page";
  columns?: Array<
    | ({ __typename: "ColumnWrapper"; name?: string | null } & {
        " $fragmentRefs"?: {
          ColumnWrapperComponent_FragmentFragment: ColumnWrapperComponent_FragmentFragment;
        };
      })
    | null
  > | null;
} & {
  " $fragmentRefs"?: {
    ColumnHeader_FragmentFragment: ColumnHeader_FragmentFragment;
  };
}) & { " $fragmentName"?: "VisibleColumn_FragmentFragment" };

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

export type FileTreeComponent_FragmentFragment = {
  __typename: "SourceCode";
  fileTree?: Array<
    | ({ __typename: "FileNode"; filePath?: string | null } & {
        " $fragmentRefs"?: {
          FileNodeComponent_FragmentFragment: FileNodeComponent_FragmentFragment;
        };
      })
    | null
  > | null;
} & { " $fragmentName"?: "FileTreeComponent_FragmentFragment" };

export type FileTreeHeader_FragmentFragment = {
  __typename: "SourceCode";
  projectDir?: string | null;
} & { " $fragmentName"?: "FileTreeHeader_FragmentFragment" };

export type FileTreePane_FragmentFragment = ({ __typename: "SourceCode" } & {
  " $fragmentRefs"?: {
    FileTreeHeader_FragmentFragment: FileTreeHeader_FragmentFragment;
    FileTreeComponent_FragmentFragment: FileTreeComponent_FragmentFragment;
  };
}) & { " $fragmentName"?: "FileTreePane_FragmentFragment" };

export type FileContentPane_FragmentFragment = ({ __typename: "OpenFile" } & {
  " $fragmentRefs"?: {
    FileNameTabBar_FragmentFragment: FileNameTabBar_FragmentFragment;
    FileContentViewer_FragmentFragment: FileContentViewer_FragmentFragment;
  };
}) & { " $fragmentName"?: "FileContentPane_FragmentFragment" };

export type FileContentViewer_FragmentFragment = {
  __typename: "OpenFile";
  content?: string | null;
  language?: string | null;
  highlight?: Array<{
    __typename: "FileHighlight";
    fromLine?: number | null;
    toLine?: number | null;
  } | null> | null;
} & { " $fragmentName"?: "FileContentViewer_FragmentFragment" };

export type FileNameTab_FragmentFragment = {
  __typename: "OpenFile";
  fileName?: string | null;
} & { " $fragmentName"?: "FileNameTab_FragmentFragment" };

export type FileNameTabBar_FragmentFragment = ({ __typename: "OpenFile" } & {
  " $fragmentRefs"?: {
    FileNameTab_FragmentFragment: FileNameTab_FragmentFragment;
  };
}) & { " $fragmentName"?: "FileNameTabBar_FragmentFragment" };

export type PageQueryQueryVariables = Exact<{
  tutorial: Scalars["String"]["input"];
  step?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PageQueryQuery = {
  __typename: "Query";
  page?:
    | ({ __typename: "Page" } & {
        " $fragmentRefs"?: {
          VisibleColumn_FragmentFragment: VisibleColumn_FragmentFragment;
        };
      })
    | null;
};

export const ColumnTab_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColumnTab_FragmentFragment, unknown>;
export const ColumnTabs_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTabs_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ColumnTab_Fragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColumnTabs_FragmentFragment, unknown>;
export const ColumnHeader_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnHeader_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ColumnTabs_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTabs_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ColumnTab_Fragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColumnHeader_FragmentFragment, unknown>;
export const ColumnWrapperComponent_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnWrapperComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ColumnWrapperComponent_FragmentFragment, unknown>;
export const VisibleColumn_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VisibleColumn_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ColumnHeader_Fragment" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "ColumnWrapperComponent_Fragment",
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTabs_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ColumnTab_Fragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnHeader_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ColumnTabs_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnWrapperComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VisibleColumn_FragmentFragment, unknown>;
export const FileTreeHeader_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileTreeHeader_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SourceCode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "projectDir" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileTreeHeader_FragmentFragment, unknown>;
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
export const FileTreeComponent_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileTreeComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SourceCode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fileTree" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "filePath" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FileNodeComponent_Fragment" },
                },
              ],
            },
          },
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
  ],
} as unknown as DocumentNode<FileTreeComponent_FragmentFragment, unknown>;
export const FileTreePane_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileTreePane_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SourceCode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileTreeHeader_Fragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileTreeComponent_Fragment" },
          },
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
      name: { kind: "Name", value: "FileTreeHeader_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SourceCode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "projectDir" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileTreeComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "SourceCode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fileTree" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "filePath" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FileNodeComponent_Fragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileTreePane_FragmentFragment, unknown>;
export const FileNameTab_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNameTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fileName" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileNameTab_FragmentFragment, unknown>;
export const FileNameTabBar_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNameTabBar_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileNameTab_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNameTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fileName" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileNameTabBar_FragmentFragment, unknown>;
export const FileContentViewer_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileContentViewer_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "language" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "highlight" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "fromLine" } },
                { kind: "Field", name: { kind: "Name", value: "toLine" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileContentViewer_FragmentFragment, unknown>;
export const FileContentPane_FragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileContentPane_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileNameTabBar_Fragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileContentViewer_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNameTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "fileName" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileNameTabBar_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "FileNameTab_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileContentViewer_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "OpenFile" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "language" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "highlight" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "fromLine" } },
                { kind: "Field", name: { kind: "Name", value: "toLine" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FileContentPane_FragmentFragment, unknown>;
export const PageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PageQuery" },
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
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "VisibleColumn_Fragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTab_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnTabs_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ColumnTab_Fragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnHeader_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ColumnTabs_Fragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ColumnWrapperComponent_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ColumnWrapper" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "column" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VisibleColumn_Fragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Page" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ColumnHeader_Fragment" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "columns" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "ColumnWrapperComponent_Fragment",
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageQueryQuery, PageQueryQueryVariables>;
