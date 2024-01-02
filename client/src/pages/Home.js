import About from "../components/About";
import EventCats from "../components/EventCats";
import Hero from "../components/Hero";
import Timer from "../components/Timer";
import Faq from "../components/Faq";
import Reason from "../components/Reasons";
import Footer from "../components/Footer";
import "../App.css";

const Home = () => {
  return (
    <main id="Home">
      <Hero />
      <Timer />
      <EventCats />
      <About />
      <Reason />
      <Faq />
    </main>
  );
};
export default Home;
