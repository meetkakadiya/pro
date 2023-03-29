import { Button, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Chips } from "primereact/chips";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertComponent from "./AlertComponent";


export function FormComponent(props) {
  const { isEdit, data } = props;

  let navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productOwnerName, setProductOwnerName] = useState("");
  const [Developers, setDevelopers] = useState([]);
  const [scrumMasterName, setScrumMasterName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [methodology, setMethodology] = useState(null);
  const [isAlert, setAlert] = useState(null);

  const optionList = [
    { value: "Water Fall", label: "WaterFall" },
    { value: "Agile", label: "Agile" },
  ];

  useEffect(() => {
    if (isEdit) {
      setProductName(data?.productName);
      setProductOwnerName(data?.productOwnerName);
      setDevelopers(data?.Developers);
      setScrumMasterName(data?.scrumMasterName);
      setStartDate(data?.startDate);
      setMethodology(data?.methodology);
    }
  }, []);

  useEffect(() => {
    if(isAlert){
      setTimeout(()=>{
        setAlert(null)
      },1500)
    }
  },[isAlert])

  const handleSubmit = () => {
    if (isEdit) {
      handleEdit();
    } else {
      handleAdd();
    }
  };

  //handle Submit Function
  const handleAdd = () => {
    const url = "http://localhost:3000/api/add";
    const new_data = {
      productName,
      productOwnerName,
      Developers,
      scrumMasterName,
      startDate,
      methodology: methodology?.value,
    };
    axios
      .post(url, new_data)
      .then((res) => {
        const result = res?.data;
        if (!result.success) {
          setAlert({success:false, msg:result.message})
        } else {
          navigate("/", {state: {success:true, msg:result.message}});
        }
      })
      .catch((err) => {
        setAlert({success:false, msg:err?.message})
      });
  };

  // const AlertMessage = ({success,msg=''}) => {
  //   let class_c = success?'alert alert-success':'alert alert-danger';
  //   return (
  //     <div className={class_c} role="alert">
  //      <p>{msg}</p>
  //     </div>
  //   );
  // };

  // console.log(isAlert);

  const handleEdit = () => {
    const url = `http://localhost:3000/api/user/${data.productId}`;
    const new_data = {
      productId: data.productId,
      productName: productName,
      productOwnerName: productOwnerName,
      Developers: Developers,
      scrumMasterName: scrumMasterName,
      startDate: startDate,
      methodology: methodology?.value,
    };
    axios
      .put(url, new_data)
      .then((res) => {
        const result = res?.data;
        if (!result.success) {
          setAlert({success:false, msg:result.message})
        } else {
          navigate("/", {state: {success:true, msg:result.message}});
        }
      })
      .catch((err) => {
        setAlert({success:false, msg:err?.message})
      });
  };

  const validation = () => {
    if(productName == ''){
      setAlert({success:false, msg:'Please enter product name.'})
    }else if(productOwnerName == ''){
      setAlert({success:false, msg:'Please enter product owner name'})

    }else if(Developers == []){
      setAlert({success:false, msg:'Please enter Developer.'})

    }else if(scrumMasterName == ''){
      setAlert({success:false, msg:'Please enter product name.'})

    }else if(startDate == ''){
      setAlert({success:false, msg:'Please enter product name.'})

    }else if(methodology == null){
      setAlert({success:false, msg:'Please enter product name.'})
    }else{
      handleSubmit()
    }
  }

  return (
    <div className="card-body">
      {!!isAlert && <AlertComponent success={isAlert?.success} msg={isAlert?.msg}/>}
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          placeholder="Please enter Product Name"
          className="form-control"
          value={productName}
          onChange={(e) => {
            let val = e.target.value;
            setProductName(val);
          }}
        />
      </div>
      <div className="form-group" style={{ marginTop: "10pt" }}>
        <label htmlFor="productOwnerName">Product Owner Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter Product Owner Name"
          value={productOwnerName}
          onChange={(e) => {
            let val = e.target.value;
            setProductOwnerName(val);
          }}
        />
      </div>
      <div className="form-group row" style={{ marginTop: "10pt" }}>
        <label htmlFor="Developers">Developers</label>
        <Chips className="d-flex"
          required
          // style={{ width: "100%" }}
          value={Developers}
          placeholder="Please enter Developer Names"
          separator=","
          onChange={(e) => {
            let val = e.target.value;
            setDevelopers(val);
          }}
        />
      </div>
      <div className="form-group" style={{ marginTop: "10pt" }}>
        <label htmlFor="scrumMasterName">Scrum Master Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter Scrum Master Name"
          value={scrumMasterName}
          onChange={(e) => {
            let val = e.target.value;
            setScrumMasterName(val);
          }}
        />
      </div>
      <div className="form-group" style={{ marginTop: "10pt" }}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          className="form-control"
          placeholder=""
          value={startDate}
          onChange={(e) => {
            let val = e.target.value;
            setStartDate(val);
          }}
        />
      </div>
      <div className="form-group" style={{ marginTop: "10pt" }}>
        <label htmlFor="methodology">Methodology</label>
        <Select
          options={optionList}
          placeholder="Select Product Methodology"
          value={
            methodology
              ? optionList.find((x) => x.value === methodology)
              : methodology
          }
          onChange={setMethodology}
          required
        />
      </div>

      <Button
        style={{ marginTop: "10pt" }}
        variant="primary"
        type="submit"
        onClick={() => validation()}
      >
        {isEdit ? "Edit Product" : "Add Product"}
      </Button>
    </div>
  );
}
