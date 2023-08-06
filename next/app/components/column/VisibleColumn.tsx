import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ColumnHeader } from "./ColumnHeader";

import styles from "./style.module.css";

const fragmentDefinition = graphql(`
  fragment VisibleColumn_Fragment on Page {
    ...ColumnHeader_Fragment
  }
`);

interface VisibleColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const VisibleColumn = (props: VisibleColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div>
      <ColumnHeader fragment={fragment} />
    </div>
  );
};
