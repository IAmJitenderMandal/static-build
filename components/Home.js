import styles from "/styles/Home.module.css";
import Card from "./Card";

export default function Home({ data }) {
  return (
    <div>
      <h1>Dev Store</h1>

      <div className={styles.container}>
        {data.map((eachCard) => {
          return <Card key={eachCard.id} cardInfo={eachCard} />;
        })}
      </div>
    </div>
  );
}
