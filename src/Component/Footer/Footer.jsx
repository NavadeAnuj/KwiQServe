import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-orange-500">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-2">Email: support@kwiqserve.com</p>
            <p>Phone: +91 6355409176</p>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-2xl hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-2xl hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-2xl hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin">LinkedIn</i>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-gray-800 rounded-md mb-2"
              />
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8">
          <p>&copy; 2024 KwiQServe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
