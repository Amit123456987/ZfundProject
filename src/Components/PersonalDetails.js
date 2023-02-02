import React, { useEffect, useState } from "react";
import SecondHeader from "./Small Components/SecondHeader";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputFieldCom from "./Small Components/InputFieldCom";
import EmailToggleAutoBtn from "./Small Components/EmailToggleAutoBtn";
import AnnualIncomeSec from "./Small Components/AnnualIncomeSec";
import EndButtons from "./Small Components/EndButtons";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {

  const navigate = useNavigate();

  let [PersonalDetails, setPersonalDetails] = useState({});

  useEffect(() => {

  },[PersonalDetails]);

  function handleClick(){
      navigate("/Documents", { replace: true });
  }

  const handleChange = (ev) => {
    let newKey = ev.target.value;
    PersonalDetails.newKey = true;
    setPersonalDetails(PersonalDetails);
  };

  return (
    <>
      <div className="Page2">
        <div className="inner">
          <SecondHeader
            title="Personal Details"
            description="These details are required to complete your KYC verification."
            title2="Personal Details"
          />
          {/* Main Content of Page 2nd */}
          <div className="MainContent2">
          <div>
            <div className="marital_status_head">Marital Status</div>
          </div>
          <RadioGroup 
            onClick={handleChange}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Single"
            className="marital_option"
            name="radio-buttons-group"
          >
            <div className="marital_status_option">
              <div>
                <FormControlLabel
                  value="Single"
                  className="marital_option1"
                  control={<Radio />}
                  label="Single"
                />
              </div>
              <div>
                <FormControlLabel
                  value="Married"
                  control={<Radio />}
                  className="marital_option2"
                  label="Married"
                />
              </div>
            </div>
          </RadioGroup>
          <InputFieldCom
            inputTitle="Mother’s Name"
            placeHolderText="Enter mother’s name here"
          />
          <InputFieldCom
            inputTitle="Father’s Name"
            placeHolderText="Enter father’s name here"
          />

          <InputFieldCom
            inputTitle="Email"
            placeHolderText=""
            defaultValue=""
          />
          <div className="statementText">
            You will receive portfolio statements on this email id
          </div>

          <EmailToggleAutoBtn handleChange={handleChange} />

          <AnnualIncomeSec handleChange={handleChange} />
          </div> 
          <EndButtons handleClick={handleClick}  />
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
