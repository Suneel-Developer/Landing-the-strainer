import React, { useState } from "react";
import Canva from "../../assets/canva.svg";

const Footer = () => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleopenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="w-full px-3 py-5 bg-black mt-20 relative">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center gap-3">
        <div className="flex justify-center flex-col relative">
          <button
            onClick={handleopenModal}
            className={`hover:bg-light-bg text-white w-[120px] xs:w-[130px] rounded-[50px] text-xs xs:text-[13px] flex items-center justify-center gap-2 py-2 px-3 font-semibold transition duration-300 ease-in-out ${
              isModalOpen ? "bg-light-bg" : ""
            }`}
          >
            Terms & Support
          </button>

          <div>
            {isModalOpen && (
              <div className="fixed md:static backdrop-blur-sm md:backdrop-blur-none bg-black-400 md:bg-transparent top-0 md:top-auto left-0 md:left-auto bottom-0 md:bottom-auto right-0 md:right-auto md:h-auto h-screen w-full md:w-auto flex justify-end items-end">
                <div className="text-black bg-white shadow-modalshadow z-50 w-full h-fit md:w-[367px] rounded-t-lg md:rounded-lg p-8 flex flex-col gap-4 absolute left-0 bottom-0 md:bottom-10">
                  <span className="text-2xl font-bold">Terms & Support</span>
                  <p className="text-black-100 text-sm">
                    This website has been created with Canva, but the content is
                    User Content that is subject to our
                    <a
                      href="https://www.canva.com/policies/terms-of-use/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline ml-1"
                    >
                      Terms of Use
                    </a>
                    . If you see anything that breaches our
                    <a
                      href="https://www.canva.com/policies/acceptable-use-policy/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline ml-1"
                    >
                      acceptable use policy
                    </a>
                    , please report it to our content review team.
                  </p>

                  <div className="flex justify-end flex-col md:flex-row items-center gap-3">
                    <button
                      onClick={handleCloseModal}
                      className="text-sm text-black-200 w-full md:w-20"
                    >
                      Close
                    </button>
                    <button
                      id="form_report"
                      data-report-url="https://www.canva.com/help/report-content/?source=design&amp;link="
                      type="button"
                      className="bg-gray-100 h-10 rounded w-full md:w-20 px-1 text-black-200 text-sm font-semibold"
                    >
                      Report
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <a
          href="https://www.canva.com"
          className="group bg-light-bg text-white w-[160px] rounded-[50px] text-xs xs:text-[13px] flex items-center justify-center gap-2 py-2 px-3 font-semibold transition duration-300 ease-in-out"
          target="_blank"
          rel="noreferrer"
        >
          <p>Designed in</p>
          <img src={Canva} alt="Canva" loading="lazy" className="w-10" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
