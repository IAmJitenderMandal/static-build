import styles from "/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ cardInfo }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}></div>
      <div className={styles.card_body}>
        <span className={[styles.tag, styles.tag_pink]}>Design</span>
        <Link href={`products/${cardInfo.id}`}>
          <h4>{cardInfo.category}</h4>
        </Link>
        <p>{cardInfo.description}</p>
        <div className={styles.user}>
          <div className={styles.user_info}>
            <h5>{cardInfo.title}</h5>
            <small>{cardInfo.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
