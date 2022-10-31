import Head from "next/head";
import Header from "./Header";

export default function Layout(pageProps) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content="gsap practice website by delanoor" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap');
        </style>
      </Head>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">{pageProps.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
