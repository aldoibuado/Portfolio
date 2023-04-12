import Home from "./pages/Home.js";
import About from "./pages/About.js";
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

      <SocialLinks />
    </div>
  );
}

export default App;
