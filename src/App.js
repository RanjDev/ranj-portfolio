import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>

      <Links />

      <div className=" scroll-mt-16">
        <Hero />
      </div>

      <div className="min-h-screen scroll-mt-20 mb-20" id="work">
        <Work />
      </div>

      <div className="min-h-screen scroll-mt-20 mb-20" id="experience">
        <Experience />
      </div>

      <div className="min-h-screen scroll-mt-20 mb-20" id="skills">
        <Skills />
      </div>

      <Footer />
    </div>
  );
}

export default App;
