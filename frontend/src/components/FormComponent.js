import { Button, Modal, Form } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Select from "react-select";
import { Chips } from 'primereact/chips';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';

export function FormComponent(props) {

    const {ViewAdd, handleAddClose, isEdit, data} = props

    console.log('---data', data, isEdit)

    let navigate = useNavigate()

    const [productName, setProductName] = useState('')
    const [productOwnerName, setProductOwnerName] = useState('')
    const [Developers, setDevelopers] = useState([])
    const [scrumMasterName, setScrumMasterName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [methodology, setMethodology] = useState(null)

    const optionList = [
        { value: "Water Fall", label: "WaterFall" },
        { value: "Agile", label: "Agile" }
      ];

      useEffect(()=>{
        if(isEdit){
            setProductName(data.productName)
            setProductOwnerName(data.productOwnerName)
            setDevelopers(data.Developers)
            setScrumMasterName(data.scrumMasterName)
            setStartDate(data.startDate)
            setMethodology(data.methodology)
        }
      },[])
   
      const handleSubmit = () => {
        if(isEdit){
          handleEdit()
        }else{
          handleAdd()
        }
      }

  //handle Submit Function 
  const handleAdd = () => {
    const url = 'http://localhost:3000/api/add'
    const new_data = { productName, productOwnerName, Developers, scrumMasterName, startDate, 'methodology':methodology.value  }
    axios.post(url, new_data).then(res => {
      const result = res.data;
      console.log(result)
      // const {status, message, data} = result;
      if (!result) {
        alert('no data')
      } else {
        alert(result.message)
        // window.location.reload()
        navigate('/');
      }
    }).catch(err => {
      console.log(err)
    })

    
  }

    //handle Edit Function
  const handleEdit = () => {
    const url = `http://localhost:3000/api/user/${data.productId}`
    const new_data = { "productId": data.productId, productName, productOwnerName, Developers, scrumMasterName, startDate, 'methodology':methodology.value }
    axios.put(url, new_data)
      .then(res => {
        const result = res.data;
        if (!result) {
          alert(result.message)
        } else {
          // alert(result.message)
          // window.location.reload()
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err)
      })
  
  }


  return (
    <div className='card-body' >
        <Form  className='d-gridgap-2'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control required type="text" placeholder="Please enter Product Name" defaultValue={productName} onChange={(e) => setProductName(e.target.value
            )} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Owner Name</Form.Label>
            <Form.Control required type="text" placeholder="Please enter Product Owner Name" value={productOwnerName} onChange={(e) => setProductOwnerName(e.target.value
            )} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Developers</Form.Label>
            <div >
            <Chips required value={Developers} placeholder='Please enter Developer Names' separator=","  onChange={(e) => setDevelopers(e.target.value)} />
            </div>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Scrum Master Name</Form.Label>
            <Form.Control required type="text" placeholder="Please enter Scrum Master Name" value={scrumMasterName} onChange={(e) => setScrumMasterName(e.target.value
            )} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control required type="date" placeholder="Please enter Product Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value
            )} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Methodology</Form.Label>
             <Select
              options={optionList}
              placeholder="Select Product Methodology"
              value={methodology}
              onChange={setMethodology}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
          {isEdit?'Edit Product':'Add Product'}
          </Button>
        </Form>
  </div>
  )
}
