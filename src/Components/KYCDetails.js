import React from "react";
import SecondHeader from "./Small Components/SecondHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EndButtons from "./Small Components/EndButtons";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function KYCDetails() {
  const navigate = useNavigate();

  function handleClick(){
      navigate("/Completed", { replace: true });
  }

  return (
    <>
      <SecondHeader
        title="KYC Details"
        description="Read below details carefully, they cannot be changed later."
        title2="Confirm Details"
      />
      <div className="detailsBox">
        <div className="userDetails">
          <div className="textSection">
            <div className="userHead">User Details</div>
            <div className="section">
              <div className="upperText">PAN Card Number</div>
              <div className="lowerText">Indian citizen</div>
            </div>
            <div className="section">
              <div className="upperText">Name</div>
              <div className="lowerText">Tanvi Jadhav</div>
            </div>
          </div>
          <div className="editIcon" >
            <img src="./Images/Edit.png" alt="Edit Logo" />
          </div>
        </div>


        <div className="userDetails">
          <div className="textSection">
            <div className="userHead">Personal Details</div>
            <div className="section">
              <div className="upperText">Gender</div>
              <div className="lowerText">Male</div>
            </div>
            <div className="section">
              <div className="upperText">Date of Birth</div>
              <div className="lowerText">DD/MM/YYYY</div>
            </div>
            <div className="section">
              <div className="upperText">Address</div>
              <div className="lowerText">
                250 flat no, second floor, Sector 57, Sushant Lok Phase 2
              </div>
            </div>
            <div className="section">
              <div className="upperText">Pincode</div>
              <div className="lowerText">122003</div>
            </div>
            <div className="bottomBox">
              <div className="bottomText">
                Note: You cannot edit above details as they are already verified
                through Digilocker.
              </div>
            </div>
          </div>
        </div>

        <div className="userDetails">
          <div className="textSection">
            <div className="userHead">KYC Details</div>
            <div className="section">
              <div className="upperText">Email</div>
              <div className="lowerText">examplemail@example.com</div>
            </div>
            <div className="secLR">
              <div className="secLeft">
                <div className="textSection">
                  <div className="section">
                    <div className="upperText">Martial Status</div>
                    <div className="lowerText">Unmarried</div>
                  </div>
                  <div className="section">
                    <div className="upperText">Father’s Name</div>
                    <div className="lowerText">DummyF Name</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="./Images/Edit.png" className="editImg" alt="Edit Logo" />
          <div className="secRight">
            <div className="textSection">
              <div className="section">
                <div className="upperText">Annual Income</div>
                <div className="lowerText">Below 1 Lakh</div>
              </div>
              <div className="section">
                <div className="upperText">Mother’s Name</div>
                <div className="lowerText">DummyM Name</div>
              </div>
            </div>
          </div>
        </div>

        <div className="userDetails">
          <div className="textSection">
            <div className="userHead">KYC Details</div>
            <div className="docContainer">
              <div className="docBox">
                <div className="docText">Photo</div>
                <img
                  src="./Images/UploadWithout.png"
                  alt="Upload Icon"
                  className="docImg"
                />
              </div>
              <div className="docBox">
                <div className="docText">PAN Card</div>
                <img
                  src="./Images/UploadWithout.png"
                  alt="Upload Icon"
                  className="docImg"
                />
              </div>
              <div className="docBox">
                <div className="docText">Signature</div>
                <img
                  src="./Images/UploadWithout.png"
                  alt="Upload Icon"
                  className="docImg"
                />
              </div>
            </div>
          </div>
          <img src="./Images/Edit.png" className="editImg" alt="Edit Logo" />
        </div>
        <div className="tick">
          <FormGroup className="tickLabel">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to the Terms & Conditions"
            />
          </FormGroup>
        </div>
        <EndButtons handleClick={handleClick}/>
      </div>
    </>
  );
}

export default KYCDetails;
