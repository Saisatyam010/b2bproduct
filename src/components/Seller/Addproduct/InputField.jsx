const InputField = ({ id, label, type, placeholder, textarea, resize }) => {
  const InputComponent = textarea ? "textarea" : "input";
  return (
    <div
      className={`flex flex-col gap-3 ${
        label === "Discount" || label === "Discount Type" || label === "Price"
          ? "mt-0"
          : "mt-5"
      }`}
    >
      {label && (
        <label htmlFor={id} className="text-[#626262] font-medium">
          {label}
        </label>
      )}
      <InputComponent
        id={id}
        type={type || "text"}
        required
        placeholder={placeholder || ""}
        style={{ resize: resize || "none" }}
        className={`outline-none border border-[#D9D9D9] rounded-md w-full py-2 px-4 text-base ${
          textarea ? " mb-3" : ""
        }`}
        rows={textarea ? "5" : null}
        cols={textarea ? "2" : null}
      />
    </div>
  );
};

export default InputField;
