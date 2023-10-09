import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
