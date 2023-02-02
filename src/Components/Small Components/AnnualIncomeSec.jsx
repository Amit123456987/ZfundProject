import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function AnnualIncomeSec() {
  return (
    <>
      <div className="incomeContainer">
        <div className="incomeText">Annual Income</div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          className=""
          name="radio-buttons-group"
        >
          <div className="">
            <div>
              <FormControlLabel
                value="Below 1 Lakh"
                className="incomeText"
                control={<Radio />}
                label="Below 1 Lakh"
              />
            </div>
            <div>
              <FormControlLabel
                value="1-5 Lakhs"
                control={<Radio />}
                className="incomeText"
                label="1-5 Lakhs"
              />
            </div>
            <div>
              <FormControlLabel
                value="5-10 Lakhs"
                control={<Radio />}
                className="incomeText"
                label="5-10 Lakhs"
              />
            </div>
            <div>
              <FormControlLabel
                value=">25 Lakhs"
                control={<Radio />}
                className="incomeText"
                label=">25 Lakhs"
              />
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}

export default AnnualIncomeSec;
