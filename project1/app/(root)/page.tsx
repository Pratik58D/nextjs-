import Hello from "../components/hello";
import Link from "next/link";

export default function Home() {
  console.log("what am I ? - Server or client");
  return (
    <>
      <h1>welcome to NExt js. this is home page.</h1>
      <Link href= "/blog" className="text-blue-400 underline">Blog</Link>
      <br />
      <Link href= "/product" className="text-blue-400 underline">Product</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>

      <Hello />
    </>
  );
}
