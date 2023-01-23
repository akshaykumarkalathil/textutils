import React from 'react'

export default function Alert(props) {
    const capitalize = (text) =>{
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && 
    <div className="container">
        <div className={`alert alert-${props.alert.type} my-2`} role="alert">
            <strong>{capitalize(props.alert.type)} </strong>{props.alert.msg}
        </div>
    </div>        
  )
}
