import React from "react";
import img from "../Home/digitalmarketing.png";
import img1 from "../Home/word-cloud-background-concept-internet-marketing-web-advertising-with-seo-digital-marketing-others-digital-media-strategy-vector-illustration_616200-4525.avif";
import Service from "../Service/Service";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold mb-4 text-white animate-pulse">
            Welcome to KwiQServe
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            Your one-stop solution for all your digital marketing needs.
          </p>
          <a
            href="/service"
            className="bg-orange-500 text-white px-6 py-2 rounded transition duration-300 hover:bg-orange-600"
          >
            Explore Services
          </a>
        </div>
      </section>
      <Service/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
