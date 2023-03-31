import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="movie">
        <h3>About The Project</h3>
        <p className="summary">
          Welcome to my Next.js project, which I have created to showcase my
          skills and capabilities in building applications with Next.js.
          <br /> <br /> This project is a personal learning experience, and I
          have created it as a way to explore the capabilities of Next.js and to
          demonstrate my own abilities as a developer. Throughout this project,
          I have put my knowledge of React, CSS, and other web development
          technologies into practice, and I have aimed to create an engaging and
          functional application that demonstrates my skills.
          <br /> <br /> While this project is not designed for public use or to
          provide resources to other learners, I hope that it can serve as a
          source of inspiration and a demonstration of the power of Next.js. If
          you are a fellow developer, I invite you to explore my code and see
          how I have implemented various features and functionality.
          <br /> <br /> Please visit my{" "}
          <a className="portfolio" href="https://github.com/MBeklevic">
            portfolio page
          </a>{" "}
          for my other projects during my Front-End journey.
          <br /> <br /> Thank you for taking the time to explore my Next.js
          project, and I hope that you find it informative and interesting.
        </p>
      </div>
      <style jsx>{`
        .movie {
          width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 20px 0;
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
          .portfolio {
            color: #555;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
}
