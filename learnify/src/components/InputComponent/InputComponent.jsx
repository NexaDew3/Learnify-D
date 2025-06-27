import React from "react";

const InputComponent = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  dark = false,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded border ${
          dark
            ? "bg-black text-white border-gray-500 placeholder-gray-400"
            : "bg-white text-black border-gray-300"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
