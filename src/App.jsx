import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HelloWorld from "./pages/HelloWorld";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;