import AboutUsDetails from "./AboutUsDetails";
import SectionHeader from "./SectionHeader";
const About = () => {
  return (
    <div id="about-section" className="section  py-16 px-4 sm:px-12 lg:px-24">
      <SectionHeader heading="ABOUT" along="US" color="#ff6f00" />
      <AboutUsDetails />
    </div>
  );
};
export default About;
