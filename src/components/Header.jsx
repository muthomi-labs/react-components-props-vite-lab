import PropTypes from "prop-types";

function Header({ name = "Underreacted" }) {
  return (
    <header className="site-header">
      <h1>{name}</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;