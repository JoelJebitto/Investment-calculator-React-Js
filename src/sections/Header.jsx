import React from "react";

import logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header className="m-20 text-center ">
      <img src={logo} className="h-52 mx-auto" alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
