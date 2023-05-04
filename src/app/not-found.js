import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <h1>404</h1>
        <p>Could not found requested resource</p>
        <Link href={'/'}>
            <button>Go to home page</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
