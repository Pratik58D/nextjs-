import Hello from "./components/hello";

export default function Home() {
  console.log("what am I ? - Server or client");
  return (
    <>
      <h1>welcome to NExt js</h1>
      <Hello />
    </>
  );
}
