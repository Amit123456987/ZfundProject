import React from 'react'

function InputFieldCom(props) {
  return (
    <>
    <div className="input_Field_Div">

<div className="input_Head">{props.inputTitle}</div>
<input type="text" placeholder={props.placeHolderText} className="inputfield" defaultValue={props.defaultValue}/>
</div>
    </>
  )
}

export default InputFieldCom