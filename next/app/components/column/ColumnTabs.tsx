import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./style.module.css";
import { nonNullArray } from "@/libs/nonNullArray";
import { ColumnTab } from "./ColumnTab";
import { useSearchParams } from "next/navigation";

const fragmentDefinition = graphql(`
  fragment ColumnTabs_Fragment on Page {
    columns {
      ...ColumnTab_Fragment
      name
    }
  }
`);

export interface ColumnTabProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ColumnTabs = (props: ColumnTabProps): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const searchParams = useSearchParams();

  if (!fragment.columns) {
    return <div></div>;
  }
  const columns = nonNullArray(fragment.columns);

  const param = searchParams.get("column");
  const selectColumn = param
    ? decodeURI(param)
    : columns.length > 0 && columns[0].name
    ? columns[0].name
    : "";

  return (
    <div className={styles.tabs}>
      {columns.map((col) => (
        <ColumnTab
          key={col.name}
          isSelected={col.name === selectColumn}
          fragment={col}
        />
      ))}
    </div>
  );
};
