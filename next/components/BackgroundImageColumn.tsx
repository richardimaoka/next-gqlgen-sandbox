import { FragmentType, graphql, useFragment } from "../libs/gql";
import { MobileScreenshot } from "./MobileScreenshot";
import { ModalFrame } from "./ModalFrame";

const fragmentDefinition = graphql(`
  fragment BackgroundImageColumnFragment on BackgroundImageColumn {
    width
    height
    path
    modal {
      text
      position
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
  const modal = fragment.modal;

  if (!fragment.path || !fragment.width || !fragment.height) {
    return <></>;
  }

  return modal && modal.position && modal.text ? (
    <ModalFrame position={modal.position} message={modal.text}>
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
