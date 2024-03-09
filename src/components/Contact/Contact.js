import React, {useEffect} from "react";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full px-3 py-5 bg-blue-100">
      <div className="w-full max-w-7xl mx-auto flex justify-between flex-col md:flex-row md:items-center gap-10 md:gap-3">
        <div className="flex justify-center flex-col" data-aos="fade-right">
          <h2 className="text-white sm:text-[40px] text-3xl break-words">
            THESTRAINER.CO
          </h2>
          <span className="text-white text-xl sm:text-3xl">
            Recruitment made easy.
          </span>
        </div>
        <button className="bg-white text-blue-100 w-40 sm:w-[190px] h-10 sm:h-[47px] rounded-[50px] text-lg sm:text-xl" data-aos="fade-left">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Contact;
