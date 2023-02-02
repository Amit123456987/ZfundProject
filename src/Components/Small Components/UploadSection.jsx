import React from 'react'

function UploadSection(props) {
  return (
    <>
    <div className="uploadContainer">
        <div className="uploadBox">
          <div className="panDetail">
            <div className="panHead">{props.uploadTitle}</div>
            <div className="panDes">
              {props.uploadDes}
            </div>
          </div>
          <div className="uploadImg"><img src={props.uploadPath} alt="Upload Image" /></div>
        </div>
      </div>
    </>
  )
}

export default UploadSection;