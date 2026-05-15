function About({ image, about }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img src={image} alt="blog logo" />
        </div>
        <h2>
          Ideas worth <em>sitting with.</em>
        </h2>
        <p>{about}</p>
      </div>
    </section>
  );
}

export default About;