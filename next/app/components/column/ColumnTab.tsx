import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./style.module.css";
import { ChromeIcon } from "../icons/ChromeIcon";
import { FileLinesIcon } from "../icons/FileLinesIcon";
import { SourceCodeIcon } from "../icons/SourceCodeIcon";
import { TerminalIcon } from "../icons/TerminalIcon";

const fragmentDefinition = graphql(`
  fragment ColumnTab_Fragment on ColumnWrapper {
    name
    column {
      __typename
    }
  }
`);

export interface ColumnTabProps {
  fragment: FragmentType<typeof fragmentDefinition>;
  isSelected: boolean;
}

export const ColumnTab = (props: ColumnTabProps): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const selectStyle = props.isSelected ? styles.selected : styles.unselected;

  const Icon = (): JSX.Element => {
    if (!fragment?.column?.__typename) {
      return <FileLinesIcon />;
    }

    switch (fragment.column.__typename) {
      case "SourceCodeColumn":
        return <SourceCodeIcon />;
      case "TerminalColumn":
        return <TerminalIcon />;
      case "BackgroundImageColumn":
        return <ChromeIcon />;
      case "ImageDescriptionColumn":
        return <FileLinesIcon />;
      case "MarkdownColumn":
        return <FileLinesIcon />;
    }
  };

  return (
    <div className={`${styles.tab} ${selectStyle}`}>
      <span className={styles.smartphone}>
        <Icon />
      </span>
      <span className={styles.desktop}>{fragment.name}</span>
    </div>
  );
};
