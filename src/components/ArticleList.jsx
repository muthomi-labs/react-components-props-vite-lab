import PropTypes from "prop-types";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          tag={post.tag}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.array,
};

export default ArticleList;