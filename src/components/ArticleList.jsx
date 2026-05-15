// ArticleList — renders all blog posts by mapping over the posts array
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      <div className="articles-header">
        <h3>Latest writing</h3>
        <span>{posts.length} articles</span>
      </div>
      <div className="articles-list">
        {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            tag={post.tag}
          />
        ))}
      </div>
    </main>
  );
}

export default ArticleList;