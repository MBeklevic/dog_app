import Head from "next/head";
// import styles from "../styles/Home.module.css";
import DogFilms from "../components/DogFilms";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Dog Films App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Dog Films</h2>
      <DogFilms movies={movies} />

      <style jsx>{`
        h2 {
          width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch("https://api.tvmaze.com/search/shows?q=dog");
  const movies = await data.json();
  return {
    props: { movies },
  };
}
