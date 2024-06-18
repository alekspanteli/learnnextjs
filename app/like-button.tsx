"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="text-md rounded bg-black px-4 py-1 font-bold text-white"
    >
      Likes {likes}
    </button>
  );
}
