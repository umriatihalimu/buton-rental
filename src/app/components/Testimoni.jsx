import TestiDesktop from "./TestiDesktop";
import TestimoniSlider from "./TestimoniSlider";

const Testimoni = () => {
  return (
    <section className="section flex  bg-[#f7f8f9]" id="testimoni">
      <div className="container mx-auto h-screen">
        <div className="block xl:hidden ">
          <TestimoniSlider />
        </div>
        <div className="xl:block hidden">
          <TestiDesktop />
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
