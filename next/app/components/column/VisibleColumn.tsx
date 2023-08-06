import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ColumnHeader } from "./ColumnHeader";

import styles from "./style.module.css";
import { ColumnWrapperComponent } from "./ColumnWrapperComponent";
import { nonNullArray } from "@/libs/nonNullArray";

const fragmentDefinition = graphql(`
  fragment VisibleColumn_Fragment on Page {
    ...ColumnHeader_Fragment
    columns {
      ...ColumnWrapperComponent_Fragment
      name
    }
  }
`);

interface VisibleColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
  selectColumn: string;
}

export const VisibleColumn = (props: VisibleColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  if (!fragment?.columns) {
    return <div></div>;
  }
  const columns = nonNullArray(fragment.columns);
  const visibleColumn = columns.find(
    (column) => column.name === props.selectColumn
  );

  return (
    <div>
      <ColumnHeader fragment={fragment} selectColumn={props.selectColumn} />
      {visibleColumn && <ColumnWrapperComponent fragment={visibleColumn} />}
    </div>
  );
};
