import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Motor from "./components/Motor";
import Testimoni from "./components/Testimoni";
import Why from "./components/Why";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Motor />
      <About />
      <Why />
      <Testimoni />
      <Cta />
      <Footer />

      <div className=""></div>
    </main>
  );
}
