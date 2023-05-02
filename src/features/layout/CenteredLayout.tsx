import React from "react";
import styles from "./CenteredLayout.module.css";

type PropsType = {
  children: React.ReactNode;
};

export const CenteredLayout: React.FC<PropsType> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
