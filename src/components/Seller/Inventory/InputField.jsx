import React from "react";

const InputField = ({ handleCheck, label, value, defaultChecked }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="filterOptions"
        value={value}
        id={label}
        defaultChecked={defaultChecked}
        onChange={handleCheck}
        className="h-4 w-4 accent-primary"
      />
      <label htmlFor={label} className="text-sm text-[#787878]">
        {label}
      </label>
    </div>
  );
};

export default InputField;
