import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="shigrue blog" width={50} height={50} />
          <h1 className={styles.logoText}>Shigureblog</h1>
        </div>
        <div className={styles.desc}>
          this demo is intended to showcase an early finetuning of Falcon-180B,
          to illustrate the impact (and limitations) of finetuning on a dataset
          of conversations and instructions. We encourage the community to
          further build upon the base model, and to create even better
          instruct/chat versions!
        </div>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Homepage</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Ticktok</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
