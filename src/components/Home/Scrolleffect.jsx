import React, { useEffect, useState } from "react";
import { ScrollEffectImages, ScrollEffectLinks } from "../Common/Data";

const Scrolleffect = () => {
  const [activeState, setactiveState] = useState("search");
  const [isScrolled, setisScrolled] = useState(false);

  const scrollToimage = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const marginTop = 0;
      const scrollY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }
  };

  const getActiveState = () => {
    for (let i = ScrollEffectLinks.length - 1; i >= 0; i--) {
      const imgSection = document.getElementById(ScrollEffectLinks[i].link);
      if (imgSection) {
        const rect = imgSection.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setactiveState(ScrollEffectLinks[i].link);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
      getActiveState();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto flex justify-around flex-wrap py-5 my-10">
      <div className="lg:w-1/3 w-full self-start sticky top-[200px] left-0 scroll-mt-3 ">
        <h1 className=" lg:text-[39px] text-3xl font-semibold pb-4">
          Streamline ordering from <br /> search to fulfillment,{" "}
        </h1>
        <div className=" mt-6">
          {ScrollEffectLinks.map((itm, indx) => (
            <div
              className={`rounded-lg px-3 ${
                activeState === itm.link ? "py-5 bg-secondary" : " py-3"
              }`}
              key={indx}
            >
              <h3
                onClick={() => scrollToimage(itm.link)}
                className={`flex items-center gap-2 cursor-pointer text-xl font-medium ${
                  activeState === itm.link
                    ? "text-black fill-black stroke-black"
                    : "text-gray-500 fill-gray-500 stroke-gray-500"
                }`}
              >
                <span className=" text-3xl">{itm.icon}</span>
                {itm.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {ScrollEffectImages.map((itm, indx) => (
          <div
            className={`${
              ScrollEffectImages.length == indx + 1 ? "" : "h-[80vh]"
            }`}
            key={indx}
            id={itm.id}
          >
            <img src={itm.imgSrc} loading="lazy" alt="Scroll images" className=" w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrolleffect;
