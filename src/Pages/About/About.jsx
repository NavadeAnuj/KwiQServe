import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 "> {/* Added pb-32 */}
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          About Us
        </h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600">
            At KwiQServe, we specialize in providing innovative digital
            marketing strategies to help your business grow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
