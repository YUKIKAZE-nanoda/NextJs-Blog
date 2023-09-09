import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsim dolor sit amet consectetur adippisicing elit elit
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Shigure</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Spy X Family follows a skilled spy named Twilight who is tasked
              with a dangerous mission to infiltrate a prestigious school and
              build a fake family with a wife and child within ten days. He
              adopts a young girl named Anya and marries a woman named Yor, who
              is secretly an assassin. Together, the three of them navigate
              their daily lives as a seemingly normal family while keeping their
              true identities a secret from each other and the world around
              them. Along the way, they face various challenges, including
              dangerous enemies, unexpected obstacles, and the struggles of
              maintaining their cover while trying to complete Twilight's
              mission.
            </p>
            <h2>Spy Family</h2>
            <p>
              Spy X Family follows a skilled spy named Twilight who is tasked
              with a dangerous mission to infiltrate a prestigious school and
              build a fake family with a wife and child within ten days. He
              adopts a young girl named Anya and marries a woman named Yor, who
              is secretly an assassin. Together, the three of them navigate
              their daily lives as a seemingly normal family while keeping their
              true identities a secret from each other and the world around
              them. Along the way, they face various challenges, including
              dangerous enemies, unexpected obstacles, and the struggles of
              maintaining their cover while trying to complete Twilight's
              mission.
            </p>
            <p>
              Spy X Family follows a skilled spy named Twilight who is tasked
              with a dangerous mission to infiltrate a prestigious school and
              build a fake family with a wife and child within ten days. He
              adopts a young girl named Anya and marries a woman named Yor, who
              is secretly an assassin. Together, the three of them navigate
              their daily lives as a seemingly normal family while keeping their
              true identities a secret from each other and the world around
              them. Along the way, they face various challenges, including
              dangerous enemies, unexpected obstacles, and the struggles of
              maintaining their cover while trying to complete Twilight's
              mission.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
