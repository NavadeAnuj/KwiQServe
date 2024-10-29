import React from "react";

const Home = () => {
  return (
<div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center h-screen bg-gray-100 text-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Welcome to My Website</h1>
          <p className="text-xl mb-6">Your one-stop solution for all your needs.</p>
          <a href="#services" className="bg-secondary text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-primary">
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <div className="container mx-auto px-4">
          <p className="text-lg text-center">
            We are dedicated to providing the best services to our clients. Our team is experienced and professional.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="container mx-auto px-4">
          <form className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded transition duration-300 hover:bg-secondary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
