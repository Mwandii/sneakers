import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Featured from "./components/sections/Featured";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import NewArrivals from "./components/sections/NewArrivals";
import Trending from "./components/sections/Trending";
import WhyUs from "./components/sections/WhyUs";

export default function () {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Marquee/>
    <NewArrivals/>
    <Trending/>
    <Featured/>
    <WhyUs/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}