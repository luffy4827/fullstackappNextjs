import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contact from "/public/contact.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch.</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contact}
            alt="Contact Image."
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="Email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
