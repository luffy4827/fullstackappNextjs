import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about.jpeg"
          alt="about image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}> Digital Tech Content </h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto
            quod dolore iure minus porro sequi at, odio sunt perspiciatis
            eveniet, ea vel itaque necessitatibus accusamus fuga exercitationem!
            Expedita facilis tempore error assumenda nemo pariatur.
            <br />
            <br />
            Commodi et vel asperiores nostrum id velit incidunt totam placeat
            dolor pariatur dicta sunt omnis nisi recusandae porro eos nemo
            consequatur quod, alias a. Aspernatur suscipit nobis ducimus impedit
            nemo ad natus minima, a placeat soluta excepturi architecto ex
            cupiditate aliquid mollitia. Quam, suscipit expedita.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>{" "}
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
