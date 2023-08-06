import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./style.module.css";
import { ColumnTabs } from "./ColumnTabs";
import { ToInitialStepButton } from "./ToInitialStepButton";

const fragmentDefinition = graphql(`
  fragment ColumnHeader_Fragment on Page {
    ...ColumnTabs_Fragment
  }
`);

interface ColumnHeaderProps {
  fragment: FragmentType<typeof fragmentDefinition>;
  selectColumn: string;
}

export const ColumnHeader = (props: ColumnHeaderProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div className={styles.header}>
      <ColumnTabs fragment={fragment} selectColumn={props.selectColumn} />
      <ToInitialStepButton />
    </div>
  );
};
