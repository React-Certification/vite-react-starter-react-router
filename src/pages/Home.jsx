import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      Home
      <Link to="/about">About</Link>
    </div>
  );
}
