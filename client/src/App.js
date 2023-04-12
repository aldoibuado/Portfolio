import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <SocialLinks />
    </div>
  );
}

export default App;
