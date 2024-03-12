import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Timeline from "./components/Timeline/Timeline";
import Marketplace from "./components/Marketplace/Marketplace";
import Companies from "./components/Companies/Companies";
import Subscribe from "./components/Subscribe/Subscribe";
import Partner from "./components/Partner/Partner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Timeline />
      {/* <Marketplace /> */}
      <Companies />
      <Subscribe />
      {/* <Partner /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
