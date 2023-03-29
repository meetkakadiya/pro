import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Chips } from "primereact/chips";
import axios from "axios";
import { FormComponent } from "../components/FormComponent";
import { Fieldset } from 'primereact/fieldset';
import { Button, Modal, Form } from 'react-bootstrap'

export const AddProduct = () => {
  let history = useNavigate();

  // Add data
  const [ViewAdd, setViewAdd] = useState(false);
  const [RowData, setRowData] = useState([]);
  const [isEdit, setEdit] = useState(false);

  const handleAddShow = () => {
    setEdit(false);
    setViewAdd(true);
  };
  const handleAddClose = () => {
    setViewAdd(false);
  };

  const [productName, setProductName] = useState('')
  const [productOwnerName, setProductOwnerName] = useState('')
  const [Developers, setDevelopers] = useState([])
  const [scrumMasterName, setScrumMasterName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [methodology, setMethodology] = useState(null)

  const optionList = [
      { value: "WaterFall", label: "WaterFall" },
      { value: "Agile", label: "Agile" }
    ];

    const handleSubmit = () => {
      console.log('------submit called');
      if(isEdit){
        // handleEdit()
      }else{
        // handleAdd()
      }
    }



  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "5rem"  }}
    >
        <div className="card" style={{width:'50rem',}}>
        <Fieldset legend="Add Product">
        <FormComponent />
        </Fieldset>
        </div>
      {/* Add model */}
    </div>
  );
};
