import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MakeIdeasHappen from "./components/MakeIdeasHappen";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* Main content container with proper spacing for fixed navbar */}
      <main className="pt-16">
        <Hero />
        <MakeIdeasHappen />
        <OurWork />
        <AboutMe />
        <Footer />
      </main>
    </div>
  );
}
