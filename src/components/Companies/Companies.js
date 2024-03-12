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
      <div className="text-[18.4px] md:text-[42.2px] text-center tracking-[-0.02em] leading-[0.97727273em] max-w-[1080px] mx-auto" data-aos="zoom-in">
        Hazte <span className="text-blue-100"> partner</span> y se parte de una
        <span className="text-blue-100"> comunidad </span> internacional de
        reclutadores
        <span className="text-yellow-100">.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 mt-14 max-w-[1024px] mx-auto">
        <div data-aos="fade-up">
          <p className="text-[18px] sm:text-[21px]">Confían en nosotros:</p>
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-6 mt-5 ">
            <img
              src={Raya}
              alt="Raya"
              className="w-20 sm:w-28"
              loading="lazy"
            />
            <img
              src={Locco}
              alt="Locco"
              className="h-[38px] sm:h-10"
              loading="lazy"
            />
            <img
              src={Check}
              alt="Check"
              className="h-14"
              loading="lazy"
            />
            <img
              src={Global}
              alt="Global"
              className="w-44 sm:w-48"
              loading="lazy"
            />
            <img
              src={Amipass}
              alt="Amipass"
              className="w-40 sm:w-44"
              loading="lazy"
            />
            <img
              src={Adwise}
              alt="Adwise"
              className="w-32"
              loading="lazy"
            />
            <img
              src={Totalpack}
              alt="Totalpack"
              className="w-40 sm:w-48"
              loading="lazy"
            />
            <img
              src={Qznet}
              alt="Qznet"
              className="w-24 sm:w-[126px] h-[42px"
              loading="lazy"
            />
            <img
              src={Charidy}
              alt="Charidy"
              className="w-40 sm:w-48"
              loading="lazy"
            />
            <img
              src={Marketplace}
              alt="Marketplace"
              className="w-[51px] sm:w-[57px] h-[51px] sm:h-[57px]"
              loading="lazy"
            />
            <img
              src={OlamiJobiz}
              alt="OlamiJobiz"
              className="w-36 sm:w-36"
              loading="lazy"
            />
            <img
              src={Inflamable}
              alt="Inflamable"
              className="w-36 sm:w-36"
              loading="lazy"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <div>
            <p className="text-[18px] sm:text-[21px]">Somos parte de:</p>
            <div className="flex justify-center lg:justify-between items-center gap-6 flex-wrap mt-5 px-2 sm:px-6">
              <div className="sm:w-64 sm:h-32 flex flex-col justify-center gap-3">
                <img
                  src={Microsoft}
                  alt="Microsoft"
                  className="h-14 sm:h-20 w-[188px]"
                  loading="lazy"
                />
                <img
                  src={OpenaiMicrosoft}
                  alt="OpenaiMicrosoft"
                  className="w-44"
                  loading="lazy"
                />
              </div>
              <img
                src={Georgia}
                alt="Georgia"
                className="h-[101px] sm:h-[114px] w-[101px] sm:w-[114px]"
                loading="lazy"
              />
              <img
                src={Fusen}
                alt="Fusen"
                className="w-[175px] sm:w-[198px] h-[82px] sm:h-[92px]"
                loading="lazy"
              />
              <img
                src={Create}
                alt="Create"
                className="h-[78px] sm:h-[88px] w-[87px] sm:w-[98px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[18px] sm:text-[21px]">AI Partner:</p>
            <div className="flex justify-center sm:justify-start px-2 sm:px-6">
              <img
                src={SmartUp}
                alt="SmartUp"
                className="h-[39px] sm:h-[45.2px] w-[197px] sm:w-[222px] mt-7"
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
