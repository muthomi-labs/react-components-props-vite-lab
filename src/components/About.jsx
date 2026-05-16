import PropTypes from "prop-types";

function About({
  image = "https://via.placeholder.com/215",
  about = "This is a blog about React."
}) {
  return (
    <aside className="hero">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img src={image} alt="blog logo" />
        </div>

        <h2>
          Ideas worth <em>sitting with.</em>
        </h2>

        <p>{about}</p>
      </div>
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;