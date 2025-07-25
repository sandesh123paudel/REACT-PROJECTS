import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import CategoryPage from "./pages/Categorypage";
import Errorpage from "./pages/Errorpage";
import About from "./pages/About";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("visit");
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit) > 24 * 60 * 60 * 1000) {
      setLoading(true);
      localStorage.setItem("visit", now.toString());

      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3500);

      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) return <Preloader />;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
