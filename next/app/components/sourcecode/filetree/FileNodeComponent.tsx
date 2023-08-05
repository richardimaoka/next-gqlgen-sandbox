import { FileNodeIcon } from "./FileNodeIcon";
import Link from "next/link";
import styles from "./style.module.css";

export interface FileNodeComponentProps {
  nodeType: "FILE" | "DIRECTORY";
  name: string;
  filePath: string;
  offset: number;
  isUpdated: boolean;
  currentDirectory?: string;
  step: string;
}

export const FileNodeComponent = (
  props: FileNodeComponentProps
): JSX.Element => {
  const isCurrentDirectory = props.filePath === props.currentDirectory;
  const filenodeStyle = props.isUpdated
    ? `${styles.filenode} ${styles.updated}`
    : styles.filenode;

  const Component = () => (
    <div className={filenodeStyle}>
      <div style={{ marginLeft: `${props.offset * 16}px` }}>
        <FileNodeIcon nodeType={props.nodeType} />
      </div>
      <div className={styles.nodename}>
        {props.name}
        {isCurrentDirectory && (
          <span className={styles.currentdirectory}>
            {" //current directory"}
          </span>
        )}
      </div>
    </div>
  );

  return props.nodeType === "FILE" && props.filePath ? (
    <Link
      style={{
        textDecoration: "none",
      }}
      href={`/?step=${props.step}&openFilePath=${encodeURIComponent(
        props.filePath
      )}`}
    >
      <Component />
    </Link>
  ) : (
    <Component />
  );
};
