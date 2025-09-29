import gsap from "gsap";
import { ScrollTrigger } from "gsap/all.js";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl">Welcome to World of GTA and Gsap!</h1>
      </div>
    </main>
  );
};

export default App;