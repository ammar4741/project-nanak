// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./Component/Contact";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  return (
    <>
      <div id="about">
        <About />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
