import React from "react";
import Brands from "./Brands";
import MotorSlider from "./MotorSlider";

const Motor = () => {
  return (
    <section className="h-screen " id="motor">
      <div className="container mx-auto">
        <Brands />
        <MotorSlider />
      </div>
    </section>
  );
};

export default Motor;
