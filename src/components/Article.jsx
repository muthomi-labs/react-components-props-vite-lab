// Article — displays a single blog post card
function Article({ title, date, preview, tag }) {
  return (
    <article className="article-card">
      <div className="article-top">
        <span className="article-tag">{tag}</span>
        <span className="article-date">{date}</span>
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="article-preview">{preview}</p>
    </article>
  );
}

export default Article;