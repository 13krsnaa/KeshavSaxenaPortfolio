import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import ClickSpark from "./components/ClickSpark";

function App() {

  return (
    <ThemeProvider>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={16}
        sparkRadius={31}
        sparkCount={8}
        duration={400}
        easing="ease-out"
        extraScale={1}
      >
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </ClickSpark>
    </ThemeProvider>
  )
}

export default App
