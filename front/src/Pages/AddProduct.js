import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormComponent } from "../components/FormComponent";
import { Fieldset } from "primereact/fieldset";

export const AddProduct = () => {
  return (
    <div className="d-flex justify-content-center" style={{ margin: "5rem" }}>
      <div className="card" style={{ width: "40rem" }}>
        <Fieldset legend="Add Product">
          {/* Form components */}
          <FormComponent />
        </Fieldset>
      </div>
      {/* Add model */}
    </div>
  );
};
