import React from "react";
import { BeatLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
