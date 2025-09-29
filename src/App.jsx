import gsap from "gsap";
import { ScrollTrigger } from "gsap/all.js";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <nav>
        <img src="/images/nav-logo.svg" alt="logo" className="scale-90" />
        <img src="/images/menu.svg" alt="menu" className="w-10" />
      </nav>
    </main>
  );
};

export default App;