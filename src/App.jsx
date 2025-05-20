import "./App.css";
import React from "react";
import Header from "./sections/Header.jsx";
import OutputSection from "./sections/OutputSection.jsx";
import InputSection from "./sections/InputSection.jsx";
import { useState } from "react";

function App() {
  const [initI, setInitI] = useState(0);
  const [annualI, setAnnualI] = useState(0);
  const [exceR, setExceR] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <>
      <h1>{initI}</h1>
      <Header />
      <InputSection
        iI={initI}
        siI={setInitI}
        aI={annualI}
        saI={setAnnualI}
        eR={exceR}
        seR={setExceR}
        D={duration}
        sD={setDuration}
      />
      <OutputSection />
    </>
  );
}

export default App;
