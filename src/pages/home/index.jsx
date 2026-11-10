import Navbar from "@/features/Navbar";
import Hero from "@/features/Hero";
import Technologies from "@/features/Technologies";
import Projects from "@/features/Projects";
import AboutMe from "@/features/AboutMe";
import Education from "@/features/Education";
import SocialMedia from "@/features/SocialMedia";

import ErrorBoundary from "@/components/errors/ErrorBoundary";
import { useHomeHook } from "./hook";

// Secciones que se deslizan ENCIMA del hero (en orden)
const SECTIONS = [
  { name: "Technologies", Component: Technologies },
  { name: "Projects", Component: Projects },
  { name: "AboutMe", Component: AboutMe },
  { name: "Education", Component: Education },
];

const Home = () => {
  useHomeHook();

  return (
    <>
      <ErrorBoundary name="Navbar">
        <Navbar />
      </ErrorBoundary>

      <main>
        {/* El hero se queda fijo mientras el resto pasa por encima */}
        <ErrorBoundary name="Hero">
          <Hero />
        </ErrorBoundary>

        {/* relative z-10: todo lo que sigue queda siempre por encima del hero */}
        <div className="relative z-10">
          {SECTIONS.map(({ name, Component }) => (
            <ErrorBoundary key={name} name={name}>
              <Component />
            </ErrorBoundary>
          ))}

          <ErrorBoundary name="SocialMedia">
            <SocialMedia />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};

export default Home;
