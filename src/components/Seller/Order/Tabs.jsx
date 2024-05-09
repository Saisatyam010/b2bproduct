import React from "react";

const Tabs = () => {
  return (
    <div className="container mx-auto flex gap-10 my-3">
      <h3 className=" text-gray  border-primary decoration-primary p-2 cursor-pointer">
        Orders
      </h3>
      <h3 className=" text-primary border-b-2 border-primary decoration-primary p-2 cursor-pointer">
        Cancelled order
      </h3>
    </div>
  );
};

export default Tabs;
