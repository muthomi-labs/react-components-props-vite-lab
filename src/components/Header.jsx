function Header({ name }) {
  const parts = name.split(" ");
  const last = parts.pop();

  return (
    <header className="site-header">
      <h1>
        {parts.join(" ")} <span>{last}</span>
      </h1>
    </header>
  );
}

export default Header;