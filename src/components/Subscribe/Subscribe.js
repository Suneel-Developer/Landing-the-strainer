import React, {useEffect} from "react";
import Logo from "../../assets/blue-logo.png";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";


const Subscribe = () => {


  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full px-3 py-5 bg-blue-100">
      <div className="w-full max-w-7xl mx-auto flex justify-between flex-col md:flex-row items-center gap-6 md:gap-3">
        <div className="flex justify-center items-center flex-col md:flex-row gap-6" data-aos="fade-right">
          <img src={Logo} alt="thestrainer" />
          <p className="text-white text-2xl sm:text-3xl text-center">Únete a nuestra red de partners</p>
        </div>
        <button className="bg-white text-blue-100 w-40 sm:w-[190px] h-10 sm:h-[47px] rounded-[50px] text-lg sm:text-xl" data-aos="fade-left">Suscribete</button>
      </div>
    </section>
  );
};

export default Subscribe;
