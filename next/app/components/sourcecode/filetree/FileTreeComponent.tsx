import { FileNodeComponent } from "./FileNodeComponent";
import styles from "./style.module.css";

export interface FileTreeComponentProps {
  isFolded: boolean;
}

export const FileTreeComponent = ({
  isFolded,
}: FileTreeComponentProps): JSX.Element => {
  const fileTree = [
    { nodeType: "FILE", filePath: ".gitignore" },
    { nodeType: "FILE", filePath: "index.html" },
    { nodeType: "FILE", filePath: "package-lock.json" },
    { nodeType: "DIRECTORY", filePath: "package.json" },
  ];

  return isFolded ? (
    <div className={styles.tree} />
  ) : (
    <div className={styles.tree}>
      {fileTree.map((file) => (
        <FileNodeComponent
          key={file.filePath}
          nodeType={file.nodeType as "FILE" | "DIRECTORY"}
          name={file.filePath}
          filePath={file.filePath}
          offset={0}
          isUpdated={false}
          step="1"
        />
      ))}
    </div>
  );
};
