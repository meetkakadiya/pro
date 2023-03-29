import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormComponent } from "../components/FormComponent";
import { Fieldset } from "primereact/fieldset";
import { Button, Modal, Form } from "react-bootstrap";
import { Chips } from "primereact/chips";
import Select from "react-select";
import axios from 'axios';


export const EditProduct = (props) => {

  const location = useLocation();
  const { data, isEdit } = location.state || "";

  return (
    <div className="d-flex justify-content-center" style={{ margin: "5rem" }}>
      <div className="card" style={{ width: "50rem" }}>
        <Fieldset legend="Edit Product">
          <FormComponent 
            isEdit={isEdit}
            data={data}
        />
        </Fieldset>
      </div>
      {/* Add model */}
    </div>
  );
};
