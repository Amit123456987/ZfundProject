import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function EmailToggleAutoBtn() {
  const [emailAddreas, setEmailAddreas] = React.useState("@gmail.com");

  const handleEmailAddreas = (event, newEmailAddreas) => {
    setEmailAddreas(newEmailAddreas);
  };
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>

      <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text aliasdfgnment"
      className="autoCompleteContainer"
    >
        
      <ToggleButton value="@gmail.com" aria-label="@gmail.com">
      @gmail.com
      </ToggleButton>
      <ToggleButton value="@yahoo.com" aria-label="@yahoo.com">
      @yahoo.com
      </ToggleButton>
      <ToggleButton value="@yahoo.co.in" aria-label="@yahoo.co.in">
      @yahoo.co.in 
      </ToggleButton>
      <ToggleButton value="@rediffmail.com" aria-label="@rediffmail.com">
      @rediffmail.com
      </ToggleButton>

      </ToggleButtonGroup>
    </>
  );
}

export default EmailToggleAutoBtn;
