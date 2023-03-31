import Link from "next/link";

const Post = () => {
  return (
    <>
      <h1>Post</h1>
      <p>Burası Post Sayfası</p>
      <Link href={"/"}>Anasayfaya dön</Link>
    </>
  );
};

export default Post;
