import React from 'react'

export default function Alert(props) {
    const capitalize = (text) =>{
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className='my-2' style={{height:'60px'}}>
    {props.alert && 
    <div className="container">
        <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)} </strong>{props.alert.msg}
        </div>
    </div>}
    </div>     
  )
}
