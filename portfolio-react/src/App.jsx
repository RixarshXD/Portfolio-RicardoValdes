import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div className="font-mono ">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
