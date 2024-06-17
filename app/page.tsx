"use client";

import { useState } from "react";

const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

export default function Home() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    // console.log('Likes:', likes)
  }

  return (
    <>
      <Header title="Alex Panteli" />
      <Header />
      <br />
      <ul role="list">
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <br />
      <button
        onClick={handleClick}
        className="text-md rounded bg-black px-4 py-1 font-bold text-white"
      >
        Likes {likes}
      </button>
    </>
  );
}

function Header({ title }: { title?: string }) {
  return <h1>{`Title is ${title ?? "Default title"}`}</h1>;
}
