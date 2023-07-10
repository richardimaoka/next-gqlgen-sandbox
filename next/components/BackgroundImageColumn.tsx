import { FragmentType, graphql, useFragment } from "../libs/gql";
import { MobileScreenshot } from "./MobileScreenshot";
import { ModalFrame } from "./ModalFrame";

const fragmentDefinition = graphql(`
  fragment BackgroundImageColumnFragment on BackgroundImageColumn {
    width
    height
    path
    modal {
      ...ModalFrameFragment
    }
  }
`);

export interface BackgroundImageColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const BackgroundImageColumn = (
  props: BackgroundImageColumnProps
): JSX.Element => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  if (!fragment.path || !fragment.width || !fragment.height) {
    return <></>;
  }

  return fragment.modal ? (
    <ModalFrame fragment={fragment.modal}>
      <MobileScreenshot
        src={fragment.path}
        width={fragment.width}
        height={fragment.height}
      />
    </ModalFrame>
  ) : (
    <MobileScreenshot
      src={fragment.path}
      width={fragment.width}
      height={fragment.height}
    />
  );
};
