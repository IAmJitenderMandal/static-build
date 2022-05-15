import styles from "../styles/Home.module.css";
import Home from "../components/Home";

export default function Index({ data }) {
  return (
    <div className={styles.container}>
      <Home data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { data },
  };
}
