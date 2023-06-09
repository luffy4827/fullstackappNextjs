import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your Digital Product</h1>
        <p className={styles.desc}>Turning your idea in reality. We bring together the teams from the global tech technology.</p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="home image" className={styles.image} />
      </div>
    </div>
  );
}
