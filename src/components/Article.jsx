import PropTypes from "prop-types";

function Article({
  title,
  date = "January 1, 1970",
  preview,
  tag,
}) {
  return (
    <article className="article-card">
      <div className="article-top">
        <span className="article-tag">{tag}</span>

        <small className="article-date">
          {date}
        </small>
      </div>

      <h3 className="article-title">{title}</h3>

      <p className="article-preview">
        {preview}
      </p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  preview: PropTypes.string,
  tag: PropTypes.string,
};

export default Article;