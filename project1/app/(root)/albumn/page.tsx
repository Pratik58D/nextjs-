import React from "react";

const Album = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("faliled to fetch data");
  const albums = await response.json();
  // console.log(albums);

  return (
    <div>
      {albums.map((data: { id: number; title: string }) => (
        <h3 key={data.id} className="text-[16px] text-red-600">{data.title}</h3>
      ))}
    </div>
  );
};

export default Album;
