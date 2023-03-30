import React from 'react'

export default function AlertComponent(props) {
    const {success,msg=''} = props
    let class_c = success?'alert alert-success':'alert alert-danger';
    return (
      // Show alert message 
      <div className={class_c} role="alert">
       <p>{msg}</p>
      </div>
    );
}
