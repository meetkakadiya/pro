import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FormComponent } from '../components/FormComponent';
import { Fieldset } from 'primereact/fieldset';

export const EditProduct = (props) => {

    // const {ViewAdd, handleAddClose, isEdit, data} = props

    const location = useLocation()
    const {info, isEdit} = location.state || '' 

    console.log('------data--------edit------', isEdit)

  return (
    <div
      class="d-flex justify-content-center"
      style={{ margin: "5rem"  }}
    >
        <div className="card" style={{width:'50rem',}}>
        <Fieldset legend="Edit Product">
        <FormComponent 
            isEdit={isEdit}
            data={info}
        />
        </Fieldset>
        </div>
      {/* Add model */}
    </div>
  )
}
