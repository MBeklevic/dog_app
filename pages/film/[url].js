// import { useRouter } from "next/router";

import Head from "next/head";

export default function Film({ params, movies }) {
  let movie = movies.filter((movie) => movie.show.id == params.url)[0].show;
  //   console.log(movie.image.original);

  // An alternativ way to get params
  //   const router = useRouter();
  //   const { url } = router.query;
  return (
    <div className="movie">
      <Head>
        <title>{movie.name}</title>
      </Head>
      <div
        className="cover"
        style={{ backgroundImage: `url(${movie.image.original})` }}
      ></div>
      <h3>{movie.name}</h3>
      <div className="summary">
        {movie.summary.replace(/<\/?[^>]+(>|$)/g, "")}
      </div>
      <style jsx>{`
        .movie {
          width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 20px 0;
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 800px;
            background-size: cover;
            opacity: 0.3;
            z-index: -2;
            &::before {
              content: "";
              background: linear-gradient(to bottom, transparent, #ddd);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
          h3 {
            font-size: 30px;
            margin-bottom: 20px;
            padding: 0 20px;
          }
          .summary {
            font-size: 18px;
            color: #777;
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch("https://api.tvmaze.com/search/shows?q=dog");
  const movies = await data.json();
  return {
    props: { movies, params },
  };
}
