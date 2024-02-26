import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Products from "./Components/Products";
import Blog from "./Components/Blog";
import Newssletter from "./Components/Newssletter";
import Footer from "./Components/MyFooter";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      {/* <Newssletter /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
