export default function Dummy({ products }) {
  return (
    <div>
      <h2>Create Dummy App &rarr;</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
      <div>
        {products?.json?.json.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <li>{data.value}</li>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  try {
    console.log("Generating / Regenerating ProductList");

    const response = await fetch(
      "https://CompetitiveNaturalRuby.shwetaswami.repl.co"
    );

    const data = await response.json();
    console.log({ response });

    return {
      props: {
        products: data || [],
      },
      revalidate: 20,
    };
  } catch (err) {
    return { props: { products: {} } };
  }
}
