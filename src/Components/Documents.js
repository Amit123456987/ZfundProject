import React from "react";
import SecondHeader from "./Small Components/SecondHeader";
import EndButtons from "./Small Components/EndButtons";
import UploadSection from "./Small Components/UploadSection";
import { useNavigate } from "react-router-dom";

function Documents() {

  const navigate = useNavigate();

  function handleClick(){
      navigate("/Declaration", { replace: true });
  }

  return (
    <>
      <SecondHeader
        title="Documents"
        description="These documents are required to complete your KYC verification."
        title2="Uploads Documents"
      />

      <UploadSection
        uploadTitle="PAN Card"
        uploadDes="Click a picture of your
        PAN Card and upload"
        uploadPath="./Images/Upload.png"
      />

      <div className="spreatorLine"></div>

      <UploadSection
        uploadTitle="Signature"
        uploadDes="Sign on a blank white paper
        (same as in Bank records).
        Click a picture & upload."
        uploadPath="./Images/Upload.png"
      />

      <EndButtons handleClick={handleClick}/>
    </>
  );
}

export default Documents;
