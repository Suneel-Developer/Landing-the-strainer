import React, {useEffect} from "react";
import Raya from "../../assets/raya.jpg";
import Locco from "../../assets/locco.webp";
import Check from "../../assets/check.webp";
import Global from "../../assets/global.jpg";
import Amipass from "../../assets/amipass.jpg";
import Adwise from "../../assets/adwise.jpg";
import Totalpack from "../../assets/totalpack.jpg";
import Qznet from "../../assets/qznet.webp";
import Charidy from "../../assets/charidy.jpg";
import Marketplace from "../../assets/marketplace.png";
import OlamiJobiz from "../../assets/olami-jobiz.webp";
import Inflamable from "../../assets/inflamable.webp";
import Microsoft from "../../assets/microsoft-for-startup.webp";
import OpenaiMicrosoft from "../../assets/openai-microsoft.jpg";
import Georgia from "../../assets/georgia-tech.webp";
import Fusen from "../../assets/fusen.webp";
import Create from "../../assets/create.webp";
import SmartUp from "../../assets/smartup.webp";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Companies = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-14">
      <div className="text-base md:text-[42.2px] text-center tracking-[-0.02em] leading-[0.97727273em] max-w-[1080px] mx-auto" data-aos="zoom-in">
        Hazte <span className="text-blue-100"> partner</span> y se parte de una
        <span className="text-blue-100"> comunidad </span> internacional de
        reclutadores
        <span className="text-yellow-100">.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 mt-14">
        <div data-aos="fade-up">
          <p className="text-xl">Confían en nosotros:</p>
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-6 mt-5">
            <img
              src={Raya}
              alt="Raya"
              className="w-20 sm:w-40"
              loading="lazy"
            />
            <img
              src={Locco}
              alt="Locco"
              className="h-10 sm:h-14"
              loading="lazy"
            />
            <img
              src={Check}
              alt="Check"
              className="h-10 sm:h-16"
              loading="lazy"
            />
            <img
              src={Global}
              alt="Global"
              className="w-40 sm:w-64"
              loading="lazy"
            />
            <img
              src={Amipass}
              alt="Amipass"
              className="w-40 sm:w-64"
              loading="lazy"
            />
            <img
              src={Adwise}
              alt="Adwise"
              className="w-40"
              loading="lazy"
            />
            <img
              src={Totalpack}
              alt="Totalpack"
              className="w-40 sm:w-64"
              loading="lazy"
            />
            <img
              src={Qznet}
              alt="Qznet"
              className="w-24 sm:w-40"
              loading="lazy"
            />
            <img
              src={Charidy}
              alt="Charidy"
              className="w-40 sm:w-64"
              loading="lazy"
            />
            <img
              src={Marketplace}
              alt="Marketplace"
              className="w-10 sm:w-20"
              loading="lazy"
            />
            <img
              src={OlamiJobiz}
              alt="OlamiJobiz"
              className="w-36 sm:w-56"
              loading="lazy"
            />
            <img
              src={Inflamable}
              alt="Inflamable"
              className="w-36 sm:w-56"
              loading="lazy"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p className="text-xl">Somos parte de:</p>
            <div className="flex justify-center lg:justify-between items-center gap-6 flex-wrap mt-5">
              <div className="sm:w-64 sm:h-32 flex flex-col justify-center gap-3">
                <img
                  src={Microsoft}
                  alt="Microsoft"
                  className="h-14 sm:h-20"
                  loading="lazy"
                />
                <img
                  src={OpenaiMicrosoft}
                  alt="OpenaiMicrosoft"
                  className="h-10"
                  loading="lazy"
                />
              </div>
              <img
                src={Georgia}
                alt="Georgia"
                className="h-20 sm:h-32"
                loading="lazy"
              />
              <img
                src={Fusen}
                alt="Fusen"
                className="w-36 sm:w-56"
                loading="lazy"
              />
              <img
                src={Create}
                alt="Create"
                className="h-10 sm:h-20"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xl">AI Partner:</p>
            <div>
              <img
                src={SmartUp}
                alt="SmartUp"
                className="h-6 sm:h-12 mt-5"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
