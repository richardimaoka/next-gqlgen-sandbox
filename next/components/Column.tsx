import { dark1MainBg } from "@/libs/colorTheme";
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
  position: "top" | "middle";
}

export const Column = ({ children, position }: ColumnProps) => {
  const f = (p: "top" | "middle"): string => {
    switch (p) {
      case "top":
        return "";
      case "middle":
        return "display: flex; flex-direction: column; justify-content: center;";
    }
  };
  const v = f(position);

  // four main purposes of the container:
  // 1. set the width
  // 2. center the container
  // 3. top and bottom spacing
  // 4. background color or image <- this is the only thing to set in the outer container element
  return (
    <div
      css={css`
        ${v}
        @media (max-width: 768px) {
          width: 100vw;
          height: 100vh;
        }
        width: 768px;
        min-height: 100vh;
        overflow: auto;
        background-color: ${dark1MainBg};
      `}
    >
      {children}
    </div>
  );
};
