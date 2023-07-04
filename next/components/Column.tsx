import { css } from "@emotion/react";
import { ReactNode } from "react";

interface ColumnProps {
  children: ReactNode;
}

export const Column = ({ children }: ColumnProps) => (
  // four main purposes of the container:
  // 1. set the width
  // 2. center the container
  // 3. top and bottom spacing
  // 4. background color or image <- this is the only thing to set in the outer container element
  <main>
    <div
      css={css`
        @media (max-width: 768px) {
          width: 100%;
        }
        width: 768px;
        overflow-x: scroll;
      `}
    >
      {children}
    </div>
  </main>
);
