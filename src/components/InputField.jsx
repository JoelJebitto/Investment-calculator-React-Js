import React from "react";

function InputField({ value, setValue, name }) {
  return (
    <div className="flex flex-1 flex-col m-4">
      <label className="m-3" for={name}>
        {name}
        {" :"}
      </label>
      <input
        className="px-3 py-4 border rounded-xl"
        type="number"
        name={name}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
}

export default InputField;
