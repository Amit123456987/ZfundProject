import React from 'react'

function UploadSection(props) {

  

  const uploadImg =(e)=>{
    document.getElementById("fileUpload1").click();
    
  }

  const fillUpload =(e)=>{

  }


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
          <div className="uploadImg"  >
            <img src={props.uploadPath} alt="Select File" id='imgFileUpload'  onClick={uploadImg}/></div>
        </div>
        {/* <input type="file" id='fileUpload1' display="none" /> */}
      </div>
    </>
  )
}

export default UploadSection;