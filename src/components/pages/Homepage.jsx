import Navbar from "../layout/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Featured from "../sections/Featured";
import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import NewArrivals from "../sections/NewArrivals";
import Trending from "../sections/Trending";
import WhyUs from "../sections/WhyUs";

function Homepage() {
    return (
        <>
        <Hero/>
        <Marquee/>
        <NewArrivals/>
        <Trending/>
        <Featured/>
        <WhyUs/>
        <About/>
        <Contact/>
        </>
    )
};

export default Homepage;