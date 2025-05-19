import React from "react";
import InputField from "../components/InputField.jsx";

export default function InputSection(props) {
  return (
    <div className="bg-emerald-700 flex flex-col py-10 h-1/4">
      <div className="flex ">
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

      <div className="flex">
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
