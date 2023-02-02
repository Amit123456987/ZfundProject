import React from "react";

function SecondHeader(props) {
  return (
    <>
    <div className="whole_header">
      <div className="heading_Container">
        <div className="heading_title">
          {props.title}
        </div>
      </div>
        <div className="heading_description">
        {props.description}
        </div>
        <div className="heading_2_box">
          <div className="heading_2_title">{props.title2}</div>
        </div>
    </div>
    </>
  );
}

export default SecondHeader;