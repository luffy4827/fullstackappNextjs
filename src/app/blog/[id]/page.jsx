import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, corporis
            doloribus minus error, consequuntur modi odit eius rem
            necessitatibus enim doloremque. Iure architecto dolores
            voluptatibus.
          </p>
          <div className={styles.author}>
            <Image
              src="/apps.jpg"
              width={40}
              height={40}
              className={styles.avtar}
              alt="author avtar"
            />
            <span className={styles.authorName}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
              src="/apps.jpg"
              fill={true}
              className={styles.image}
              alt="author"
            />          
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptate obcaecati ipsum aliquam dolorem quisquam aspernatur eius
          nesciunt voluptates cupiditate in, eveniet debitis officia
          necessitatibus quo qui sint animi minus labore, nam expedita fugiat
          fugit consectetur magni. Repellat vitae aliquam cum ut accusantium
          magnam, odit, ipsam animi suscipit sunt nobis dicta. Magni molestiae
          quae ducimus numquam facere ad suscipit itaque, repellendus et at
          assumenda, labore voluptates quasi possimus corporis ipsa natus velit
          hic, distinctio nemo sapiente illo doloremque.
          <br />
          <br /> Voluptas suscipit beatae odit nam labore autem aliquid quia
          voluptatem! Possimus sit amet nihil, incidunt atque consectetur
          repellat iste. Reprehenderit laborum vero cum corrupti dolor maiores
          veritatis deserunt fuga praesentium mollitia asperiores quibusdam ab,
          quas harum quos possimus ipsa? Nostrum quia, illo at quam sequi, minus
          accusamus laboriosam rem in illum officiis nisi iste, alias magni unde
          quaerat eum adipisci! Aliquam laboriosam nostrum aperiam ipsam,
          assumenda dolore atque aspernatur deserunt ut in earum tempora
          recusandae. Nostrum veritatis, tempore illo nisi hic fugit possimus
          deleniti vel.
          <br />
          <br /> Suscipit consequuntur harum facilis. Blanditiis ipsum similique
          reprehenderit corrupti sint. Autem minima iusto excepturi velit porro,
          cupiditate quasi possimus. Fuga itaque repellat perferendis
          repellendus facilis autem neque inventore! Officiis voluptatem
          reiciendis corrupti, aliquam consequuntur illum iusto architecto,
          magni consectetur reprehenderit vitae libero. Eius unde quibusdam quod
          fugiat dolore rerum quam facere veniam obcaecati necessitatibus minima
          ab omnis alias libero accusantium provident iste, itaque optio placeat
          quas.
          <br />
          <br /> Aperiam necessitatibus atque reiciendis, blanditiis beatae, sed
          dignissimos ut harum veniam, odit possimus eligendi magnam ratione
          voluptates minus veritatis doloremque illum eveniet architecto esse
          ipsa itaque? Officia corporis quidem adipisci distinctio fugit ad,
          doloremque mollitia nam facere voluptas libero incidunt at earum
          consequuntur, dolor magni cum eveniet perferendis nulla, atque iure
          id. Repudiandae libero molestiae modi repellat voluptatibus expedita
          aperiam dolorum repellendus a, neque sunt, doloremque excepturi sequi
          veniam ab consequuntur.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
