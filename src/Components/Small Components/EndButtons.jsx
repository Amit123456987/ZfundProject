import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function EndButtons({handleClick}) {


  return (
    <>
    <div className="endUBtn">
        <Button onClick={handleClick} variant="contained" className="nextBox" disableElevation>
          <div className="nextText">Next</div>
        </Button>
        <Button
          variant="contained"
          color="inherit"
          className="skipBox"
          disableElevation
        >
          <div className="skipText">Skip For Now</div>
        </Button>
      </div>
    </>
  );
}

export default EndButtons;
