import LikeButton from "./like-button";

const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

export default function Home() {
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
      <LikeButton />
    </>
  );
}

function Header({ title }: { title?: string }) {
  return <h1>{`Title is ${title ?? "Default title"}`}</h1>;
}
