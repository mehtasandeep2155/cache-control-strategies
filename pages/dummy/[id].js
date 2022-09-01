export default function NewProduct({ products }) {
  return (
    <div>
      <h2>Create Dummy App ONe&rarr;</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
      <div>
        first page
        <div>
          {products?.json?.json.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <li>{data.value}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://CompetitiveNaturalRuby.shwetaswami.repl.co"
    );

    const data = await response.json();

    console.log(`Generating page for /products/`);

    return {
      props: {
        products: data || [],
      },
      revalidate: 30,
    };
  } catch (err) {
    return { props: { products: {} } };
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}
