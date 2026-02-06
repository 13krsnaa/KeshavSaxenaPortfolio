import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { useTheme } from "./contexts/ThemeContext";
import ClickSpark from "./components/ClickSpark";
import Particles from "./components/background";

function App() {
  const { theme } = useTheme();

  return (
    <ClickSpark
      sparkColor={theme === "dark" ? "#ffffff" : "#000000"}
      sparkSize={16}
      sparkRadius={31}
      sparkCount={8}
      duration={400}
      easing="ease-out"
      extraScale={1}
    >
      <Particles
        particleColors={theme === "dark" ? ["#ffffff"] : ["#000000"]}
        particleCount={1000}
        particleSpread={40}
        speed={0.5}
        particleBaseSize={700}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
      <div className="min-h-screen relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ClickSpark>
  )
}

export default App
