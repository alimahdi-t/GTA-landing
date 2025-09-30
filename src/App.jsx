import gsap from "gsap";
import { ScrollTrigger } from "gsap/all.js";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;