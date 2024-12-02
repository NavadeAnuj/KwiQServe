import React from "react";
import img from "../Home/digitalmarketing.png";
import img1 from "../Home/word-cloud-background-concept-internet-marketing-web-advertising-with-seo-digital-marketing-others-digital-media-strategy-vector-illustration_616200-4525.avif"

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
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold mb-4 text-white animate-pulse">
            Welcome to KwiQServe
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            Your one-stop solution for all your digital marketing needs.
          </p>
          <a
            href="#services"
            className="bg-orange-500 text-white px-6 py-2 rounded transition duration-300 hover:bg-orange-600"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: "SEO Optimization",
              description: "Enhance your website’s visibility on search engines.",
              bgColor: "#1a202c",
              hoverColor: "#2d3748",
            },
            {
              title: "Content Marketing",
              description: "Engage your audience with quality content.",
              bgColor: "#ff7f50",
              hoverColor: "#ff8f60",
            },
            {
              title: "Social Media Marketing",
              description: "Build your brand presence on social platforms.",
              bgColor: "#2d3748",
              hoverColor: "#4a5568",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-white p-6 rounded-lg shadow-lg transition duration-300"
              style={{
                backgroundColor: service.bgColor,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = service.hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = service.bgColor)
              }
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          About Us
        </h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">
            At KwiQServe, we specialize in providing innovative digital
            marketing strategies to help your business grow. Our team of
            experts is dedicated to delivering measurable results and creating
            meaningful connections with your audience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Contact Us
        </h2>
        <div className="container mx-auto px-4">
          <form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
