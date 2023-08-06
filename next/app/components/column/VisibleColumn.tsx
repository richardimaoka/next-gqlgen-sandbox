"use client";
import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ColumnHeader } from "./ColumnHeader";

import styles from "./style.module.css";
import { ColumnWrapperComponent } from "./ColumnWrapperComponent";
import { nonNullArray } from "@/libs/nonNullArray";
import { useState } from "react";

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
}

export const VisibleColumn = (props: VisibleColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const [selectColumn, setSelectColumn] = useState<string>("Terminal");

  if (!fragment?.columns) {
    return <div></div>;
  }
  const columns = nonNullArray(fragment.columns);
  const visibleColumn = columns.find((column) => column.name === selectColumn);

  return (
    <div className={styles.visiblecolumn}>
      <ColumnHeader fragment={fragment} selectColumn={selectColumn} />
      <div className={styles.wrapper}>
        {/* above <div> + .wrapper style is necessary to control the height of visible column = 100svh */}
        {visibleColumn && <ColumnWrapperComponent fragment={visibleColumn} />}
      </div>
    </div>
  );
};
