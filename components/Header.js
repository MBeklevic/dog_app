import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ movies }) {
  let numberOfMovies = movies ? movies.length : 10;
  let randomMovie = movies
    ? movies[Math.floor(Math.random() * numberOfMovies)]
    : null;
  const router = useRouter();
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {router.pathname === "/about" ? null : (
            <li>
              <Link href={movies ? `/film/${randomMovie.show.id}` : "/"}>
                Random Movie
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <style jsx>{`
        .header {
          background: #ddd;
          border-bottom: 1px solid #ccc;
          ul {
            display: flex;
            li {
              height: 60px;
              display: flex;
              align-items: center;
              padding: 0 20px;
              color: #333;
            }
          }
        }
      `}</style>
    </header>
  );
}
