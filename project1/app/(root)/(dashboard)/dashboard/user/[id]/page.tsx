export const dynamic = "force-dynamic";

import React from "react";

type ParamsProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: ParamsProps) => {
  const { id } = await params;

  return (
    <>
      <h1 className="text-3xl">user profile : {id} </h1>
    </>
  );
};

export default Page;
