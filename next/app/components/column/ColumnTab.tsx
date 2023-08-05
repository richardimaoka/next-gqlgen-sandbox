import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./style.module.css";

const fragmentDefinition = graphql(`
  fragment ColumnTab_Fragment on ColumnWrapper {
    name
  }
`);

export interface ColumnTabProps {
  fragment: FragmentType<typeof fragmentDefinition>;
  isSelected: boolean;
}

export const ColumnTab = (props: ColumnTabProps): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const selectStyle = props.isSelected ? styles.selected : styles.unselected;

  return <div className={`${styles.tab} ${selectStyle}`}>{fragment.name}</div>;
};
