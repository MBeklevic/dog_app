import Link from "next/link";

export default function DogFilms({ movies }) {
  // console.log(movies);
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.show.id} className="movie">
          <Link href={`/film/${movie.show.id}`}>
            <h4>{movie.show.name}</h4>
            <img src={movie.show.image.original} />
          </Link>
        </div>
      ))}
      <style jsx>{`
        .movies {
          display: flex;
          flex-wrap: wrap;
          width: 1200px;
          margin: 0 auto;
          gap: 10px;
          align-items: end;
          div {
            width: calc(25% - 10px);
            position: relative;
            h4 {
              font-size: 20px;
              position: absolute;
              bottom: 0;
              left: 0;
              color: #fff;
              background: linear-gradient(to-top, #000, transparent);
              padding: 20px;
            }
            img {
              width: 100%;
              max-height: 380px;
              object-fit: cover;
            }
          }
        }
      `}</style>
    </div>
  );
}
