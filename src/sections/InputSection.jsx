import React from "react";
import InputField from "../components/InputField.jsx";

export default function InputSection(props) {
  return (
    <div className="bg-emerald-700 flex flex-col mx-auto rounded-2xl w-1/2  p-7 h-1/4">
      <div className="flex flex-1 mx-auto w-full">
        <InputField
          value={props.iI}
          setValue={props.siI}
          name="InitialInvestment"
        />

        <InputField
          value={props.aI}
          setValue={props.saI}
          name="AnnualInvestment"
        />
      </div>

      <div className="flex flex-1 w-full mx-auto">
        <InputField
          value={props.eR}
          setValue={props.seR}
          name="ExceptedReturn"
        />

        <InputField value={props.D} setValue={props.sD} name="Duration" />
      </div>
    </div>
  );
}
