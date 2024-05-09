import { useState } from "react";
import { SellerSidebar } from "../Common/Data";
import Header from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";

const SellerLayout = () => {
  const [activeIndex, setactiveIndex] = useState(1);
  const navigate = useNavigate();
  const [Menu, setMenu] = useState(true);
  function handleRoutechange(link) {
    navigate(link);
  }
  function handleMenu() {
    setMenu(!Menu);
  }

  const navigation = useLocation();
  const { pathname } = navigation;
  return (
    <div className="flex items-start w-full">
      <div
        className={`relative w-full h-screen ${
          Menu ? "max-w-[90px]" : "max-w-[250px]"
        }  border-r-[7px] border-primary sticky top-0`}
      >
        <button
          className="absolute top-2 right-2 md:block hidden"
          onClick={handleMenu}
        >
          {Menu ? <RiMenuUnfoldLine size={20} /> : <RiMenuFoldFill size={20} />}
        </button>
        <div className={`mx-auto w-full py-3 ${Menu ? "pl-2" : "pl-5"}`}>
          <h1
            className={`text-5xl font-bold text-center mt-7 ${
              Menu && "hidden"
            }`}
          >
            LOGO
          </h1>
          <div className=" mt-[50px] mb-5">
            <div className="flex flex-col">
              {SellerSidebar.map((itm, indx) => (
                <button
                  className={`text-start py-5 px-6 outline-none flex items-center gap-2  ${
                    pathname === itm.link
                      ? " bg-primary text-white"
                      : "bg-white text-[#8C8C8C] "
                  }  rounded-l-full`}
                  key={indx}
                  onClick={() => handleRoutechange(itm.link)}
                >
                  <span>{itm.icon}</span>
                  <span className={`${Menu && "hidden"}`}>{itm.routeName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen overflow-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default SellerLayout;
