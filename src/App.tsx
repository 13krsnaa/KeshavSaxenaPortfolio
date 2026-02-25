import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Background from "./components/background";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ClickSpark from "./components/ClickSpark";

function AppContent() {
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
      <Background particleColors={theme === "dark" ? ["#ffffff"] : ["#000000"]}>
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </Background>
    </ClickSpark>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
