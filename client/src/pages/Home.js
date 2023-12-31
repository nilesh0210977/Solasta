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
      {/* <div className="non-hero"> */}
        <Timer />
        <EventCats />
        <About />
        <Reason/>
        <Faq/>
        {/* <Contact/> */}
        <Footer/>
      {/* </div> */}
    </main>
  );
};
export default Home;
