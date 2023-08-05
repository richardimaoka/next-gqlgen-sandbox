import { AnglesLeftIcon } from "@/app/components/icons/AnglesLeftIcon";
import { AnglesRightIcon } from "@/app/components/icons/AnglesRightIcon";
import styles from "./style.module.css";

interface FileTreeHeaderProps {
  projectDir?: string;
  isFolded: boolean;
  onButtonClick: () => void;
}

export const FileTreeHeader = ({
  projectDir,
  isFolded,
  onButtonClick,
}: FileTreeHeaderProps): JSX.Element => {
  const headerStyle = isFolded
    ? `${styles.header} ${styles.folded}`
    : `${styles.header} ${styles.expanded}`;

  return (
    <div className={headerStyle}>
      {!isFolded && <div className={styles.projectdir}>{projectDir}</div>}
      <button onClick={onButtonClick}>
        {isFolded ? <AnglesRightIcon /> : <AnglesLeftIcon />}
      </button>
    </div>
  );
};
