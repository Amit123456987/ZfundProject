import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="cBCenter">
        <div className="complete_box">
          <div
            className="complete_text"
            onClick={() => {
              navigate("/PersonalDetails", { replace: true });
            }}
          >
            Complete KYC
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
