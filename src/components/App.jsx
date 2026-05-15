import blog from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// App — root component, passes blog data down to all children via props
function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <div className="layout">
        <ArticleList posts={blog.posts} />
      </div>
      <footer className="site-footer">
        <strong>{blog.name}</strong> · Built with React · 2024
      </footer>
    </div>
  );
}

export default App;