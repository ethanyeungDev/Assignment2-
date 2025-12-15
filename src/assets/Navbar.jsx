import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">
        🌤️ Weather App
      </h1>

      <nav>
        <Link to="/">Weather</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
