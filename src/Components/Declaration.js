import React, { useState } from "react";
import SecondHeader from "./Small Components/SecondHeader";
import SwitchBoxDec from "./Small Components/SwitchBoxDec";
import EndButtons from "./Small Components/EndButtons";
import { useNavigate } from "react-router-dom";

function Declaration() {
  let [FATCADetail, setFATCADetail] = useState({
    "Indian citizen": false,
    "Indian tax resident": false,
    "Not politically exposed": false,
  });

  const navigate = useNavigate();

  function switchFunc() {}

  function handleClick() {
    navigate("/KYCDetails", { replace: true });
  }

  return (
    <>
      <SecondHeader
        title="FATCA Declaration"
        description="Declare your FATCA details"
        title2="Declaration"
      />
      <div className="declaration">
        <div className="decHead">Please verify that you are an:</div>
        <SwitchBoxDec
          switchFunc={(e) => {
            FATCADetail["Indian citizen"] = !FATCADetail["Indian citizen"];
          }}
          SText="Indian citizen"
        />
        <SwitchBoxDec
          switchFunc={(e) => {
            FATCADetail["Indian tax resident"] = !FATCADetail["Indian tax resident"];
          }}
          SText="Indian tax resident"
        />
        <SwitchBoxDec
          switchFunc={(e) => {
            FATCADetail["Not politically exposed"] = !FATCADetail["Not politically exposed"];
          }}
          SText="Not politically exposed"
        />
        <div className="endBtn">
          <EndButtons handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Declaration;
