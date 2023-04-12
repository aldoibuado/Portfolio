import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Experience from "./pages/Experience.js";
import Contact from "./pages/Contact.js";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio.js";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
