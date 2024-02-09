// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        {/* <BrowserRouter> */}
        <Header />
        {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter> */}
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <ToastContainer autoClose={1000} closeOnClick hideProgressBar={true} />
    </>
  );
}

export default App;
