import { css } from "@emotion/react";
import { ReactNode } from "react";

interface VerticalFrameProps {
  children: ReactNode;
  position: "top" | "middle";
}

export const VerticalFrame = ({ children, position }: VerticalFrameProps) => {
  const f = (p: "top" | "middle"): string => {
    switch (p) {
      case "top":
        return "";
      case "middle":
        return "display: flex; flex-direction: column; justify-content: center  ; ";
    }
  };
  const v = f(position);

  return (
    <div
      css={css`
        ${v}
      `}
    >
      {children}
    </div>
  );
};
