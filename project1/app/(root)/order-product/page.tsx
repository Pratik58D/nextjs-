"use client";

import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();

  const handleClick = () => {
    console.log("you are done");

    router.push("/");
  };

  return (
    <>
      <h1>Order Place</h1>

      <button onClick={handleClick}>Place order</button>
    </>
  );
}
