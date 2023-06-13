import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Catagory = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.cataTitle}>{params.catagory}</h1>
      <div className={styles.item}>
        <div className={styles.contant}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/apps.jpg"
            fill={true}
            alt="image"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.contant}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/apps.jpg"
            fill={true}
            alt="image"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.contant}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/apps.jpg"
            fill={true}
            alt="image"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Catagory;
