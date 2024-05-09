import React from "react";

const MainLayout = ({ children, bgColor }) => {
  return (
    <div
      className={`w-full h-full overflow-auto ${bgColor ? "bg-white" : "bg-[#EFEFEF]"} py-5`}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
