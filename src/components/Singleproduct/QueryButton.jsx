import React, { useState } from "react";
import Modal from "./Modal";

const QueryButton = () => {
  const [Open, setOpen] = useState(false);
  function openModal() {
    setOpen(!Open);
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="">
      <button
        className="fixed top-[40%] right-0 text-[#333333] translate-x-10 bg-secondary p-4 rotate-[-90deg] rounded-t-[26px] text-[18px]"
        onClick={openModal}
      >
        Any Query?
      </button>
      {Open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default QueryButton;
