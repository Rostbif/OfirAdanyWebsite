import "./App.css";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blogPost"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
