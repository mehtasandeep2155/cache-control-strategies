export default function Index({ products }) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <div>
        {products?.json?.json.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <li>{data.value}</li>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=59"
  );

  const response = await fetch(
    "https://CompetitiveNaturalRuby.shwetaswami.repl.co"
  );

  const data = await response.json();
  return {
    props: {
      products: data || [],
    },
  };
}
