import Home from "./components/_home/Home";
import Benefits from "./components/_benefits/Benefits";
import Subjects from "./components/_subjects/Subjects";
import Teachers from "./components/_teachers/Teachers";
import Contact from "./components/_contact/Contact";
import Footer from "./components/_footer/Footer";
import Information from "./components/_info/Information";
import UpButton from "./components/_upButton/UpButton ";
import Navigation from "./components/_navigation/Navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ForCandidates from "./components/_forCandidates/ForCandidates";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navigation />
      <UpButton />
      <Home />
      <Information />
      <Benefits />
      <Subjects />
      <Teachers />
      <ForCandidates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
