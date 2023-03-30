import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormComponent } from "../components/FormComponent";
import { Fieldset } from "primereact/fieldset";

export const EditProduct = (props) => {
  const location = useLocation();
  const { data, isEdit } = location.state || "";

  return (
    <div className="d-flex justify-content-center" style={{ margin: "5rem" }}>
      <div className="card" style={{ width: "40rem" }}>
        <Fieldset legend="Edit Product">
          {/* Form components */}
          <FormComponent isEdit={isEdit} data={data} />
        </Fieldset>
      </div>
      {/* Add model */}
    </div>
  );
};
