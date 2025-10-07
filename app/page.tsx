import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Main content container with proper spacing for fixed navbar */}
      <main className="pt-16">
        <Hero />
        <OurWork />
      </main>
    </div>
  );
}
