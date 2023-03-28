import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Chips } from "primereact/chips";
import axios from "axios";
import { FormComponent } from "../components/FormComponent";
import { Fieldset } from 'primereact/fieldset';

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

  return (
    <div
      class="d-flex justify-content-center"
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
