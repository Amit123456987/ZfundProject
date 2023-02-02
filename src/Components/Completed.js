import React from "react";
import { useNavigate } from "react-router-dom";


function Completed() {
  const navigate = useNavigate();

  function handleClick(){
      navigate("/", { replace: true });
  }

  return (
    <>
      <div className="complete_box" onClick={handleClick} >
        <div
          className="complete_text"
        >
          Completed !!!
        </div>
      </div>
    </>
  );
}

export default Completed;
