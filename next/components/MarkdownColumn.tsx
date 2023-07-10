import Image from "next/image";
import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../libs/gql";
import { MarkdownView } from "./MarkdownView";
import { ImageCentered } from "./ImageCentered";

const fragmentDefinition = graphql(`
  fragment MarkdownColumnFragment on MarkdownColumn {
    description {
      ...MarkdownFragment
    }
  }
`);

export interface MarkdownColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const MarkdownColumn = (props: MarkdownColumnProps): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  if (!fragment.description) return <> </>;

  return <MarkdownView fragment={fragment.description} />;
};
