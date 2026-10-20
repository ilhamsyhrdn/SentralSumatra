import Head from "next/head";

export function Seo({ title, description }: { title: string; description: string }) {
  const fullTitle = `${title} | Sentral Sumatra`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
