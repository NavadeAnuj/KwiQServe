import React from "react";
import Header from "../../Component/Header/Header";
import Home from "../Home/Home";
import Footer from "../../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
