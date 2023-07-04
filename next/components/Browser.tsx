import Image from "next/image";
import { css } from "@emotion/react";

interface BrowserProps {
  src: string;
  width: number;
  height: number;
}

export const Browser = ({ src, width, height }: BrowserProps) => (
  <Image
    css={css`
      display: block;
      margin: 0 auto;
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
      max-width: 768px;
      height: auto;
    `}
    src={src}
    width={width}
    height={height}
    alt={"centered image"}
  />
);
