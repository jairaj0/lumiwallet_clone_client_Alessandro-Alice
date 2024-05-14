import React, { useState } from "react";

const InputBox = ({ index, data, blur = true }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(data);

  return (
    <div
      className={`flex items-center border pl-2 ${
        isFocused ? "border-black bg-white" : "border-transparent bg-stone-100"
      } rounded-md`}
    >
      <span className="text-base font-normal text-stone-500">{index}</span>

      <input
        type="text"
        className={`py-2 w-full pl-2 pr-4 focus:border-black bg-transparent placeholder:text-stone-500 outline-none text-base font-normal ${
          blur ? "blur-sm group-hover:blur-none" : ""
        }`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default InputBox;
