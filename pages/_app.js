import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  // console.log(pageProps.movies);
  return (
    <>
      <Header movies={pageProps.movies} />
      <Component {...pageProps} />
    </>
  );
}
