import Image from "next/image";
import { css } from "@emotion/react";
interface ImageCenteredProps {
  src: string;
  width: number;
  height: number;
}

export const ImageCentered = ({ src, width, height }: ImageCenteredProps) => (
  <Image
    css={css`
      display: block;
      margin: 8px auto;
    `}
    src={src}
    width={width}
    height={height}
    alt={"centered image"}
  />
);
