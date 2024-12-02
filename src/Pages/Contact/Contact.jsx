import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_abc123", // Replace with your service ID
        "template_xyz456", // Replace with your template ID
        e.target,
        "user_789xyz" // Replace with your user ID
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Contact Us
      </h2>
      <div className="container mx-auto px-4">
        <form
          className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="name"
              type="text"
              name="user_name"
              value={formData.name}
              onChange={handleChange}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="email"
              type="email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="message"
              name="user_message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">{statusMessage}</p>
      </div>
    </section>
  );
};

export default Contact;
