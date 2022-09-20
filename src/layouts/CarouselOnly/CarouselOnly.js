import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselHeader from "../components/CarouselHeader";

const CarouselOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <CarouselHeader />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default CarouselOnly;
