import AboutMe from "@/features/AboutMe";
import Education from "@/features/Education";
import Technologies from "@/features/Technologies";
import Projects from "@/features/Projects";
import SocialMedia from "@/features/SocialMedia";

import ErrorBoundary from "@/components/errors/ErrorBoundary";
import LanguageToggle from "@/components/ui/LanguageToggle";

import { useHomeHook } from "./hook";

const SECTIONS = [
  { name: "AboutMe", Component: AboutMe },
  { name: "Education", Component: Education },
  { name: "Technologies", Component: Technologies },
  { name: "Projects", Component: Projects },
  { name: "SocialMedia", Component: SocialMedia },
];

const Home = () => {
  useHomeHook();

  return (
    <>
      <header className="flex justify-end p-4">
        <LanguageToggle />
      </header>

      <main>
        {SECTIONS.map(({ name, Component }) => (
          <ErrorBoundary key={name} name={name}>
            <Component />
          </ErrorBoundary>
        ))}
      </main>
    </>
  );
};

export default Home;
