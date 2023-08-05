import { useState } from "react";
import { source_code_pro } from "@/app/components/fonts/fonts";
import { FileTreeComponent } from "./FileTreeComponent";
import { FileTreeHeader } from "./FileTreeHeader";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment FileTreePane_Fragment on SourceCode {
    ...FileTreeHeader_Fragment
    ...FileTreeComponent_Fragment
  }
`);

export interface FileTreePaneProps {
  fragment: FragmentType<typeof fragmentDefinition>;
  currentDirectory?: string;
  step: string;
}

export const FileTreePane = (props: FileTreePaneProps): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  const [isFolded, setIsFolded] = useState(false);
  const style = isFolded ? styles.pane : styles.pane + " " + styles.expanded;

  return (
    <div className={style + " " + source_code_pro.className}>
      <FileTreeHeader
        fragment={fragment}
        isFolded={isFolded}
        onButtonClick={() => {
          setIsFolded(!isFolded);
        }}
      />
    </div>
  );
};
