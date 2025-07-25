import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import BlogDetail from "./pages/BlogDetail";
import CategoryPage from "./pages/Categorypage";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} /> */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
