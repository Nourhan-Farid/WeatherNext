import React from "react";
import styles from "./page.module.css";
export default function Loader() {
  return (
    <div className="w-screen h-[100vh] z-[350] absolute bg-[#00085e] flex justify-center justify-items-center items-center">
      <div className={styles.container}>
        <div className={styles.front}>
          <span className={styles.leftFront} />
          <span className={styles.rightFront} />
        </div>
        <span className={styles.sunshine} />
        <span className={styles.sun} />
        <div className={styles.back}>
          <span className={styles.leftBack} />
          <span className={styles.rightBack} />
        </div>
      </div>
    </div>
  );
}
