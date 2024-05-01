import { useState } from "react";
import { SellerSidebar } from "../Common/Data";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";

const SellerLayout = () => {
  const [activeIndex, setactiveIndex] = useState(1);
  const navigate = useNavigate();

  function handleRoutechange(link) {
    navigate(link);
  }
  return (
    <div>
      <div className="flex items-start">
        <div className="max-w-[250px] w-full h-screen border-r-[7px] border-primary sticky top-0">
          <div className="mx-auto w-full py-3 pl-5">
            <h1 className="text-5xl font-bold text-center mt-7">LOGO</h1>
            <div className=" mt-[50px] mb-5">
              <div className="flex flex-col">
                {SellerSidebar.map((itm, indx) => (
                  <button
                    className={`text-start py-5 px-6 outline-none flex items-center gap-2  ${
                      activeIndex === indx
                        ? " bg-primary text-white"
                        : "bg-white text-black "
                    }  rounded-l-full`}
                    key={indx}
                    onClick={() => handleRoutechange(itm.link)}
                  >
                    <span>{itm.icon}</span>
                    {itm.routeName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
