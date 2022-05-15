export default function Product({ data }) {
  console.log(data);
  return <div>{data.title}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const productIds = data.map((eachData) => {
    return {
      params: {
        id: eachData.id.toString(),
      },
    };
  });

  // console.log(productIds);

  return {
    paths: productIds,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(context);
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}
