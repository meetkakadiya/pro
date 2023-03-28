import { Button, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Chips } from "primereact/chips";
import axios from "axios";
import { FormComponent } from "../components/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button as Bt } from 'primereact/button';

const Home = () => {
  const [Data, setData] = useState([]);
  const [RowData, setRowData] = useState([]);

  // Edit data
  const [ViewEdit, setViewEdit] = useState(false);
  const handleEditShow = (item) => {
    console.log("--------handle-----", item);
    setViewAdd(true);
    setRowData(item);
    setEdit(true);
    setId(item.productId);
  };

  let history = useNavigate();
  const handleEditClose = () => {
    setViewEdit(false);
  };

  // Delete data
  const [ViewDelete, setViewDelete] = useState(false);
  const handleDeleteShow = () => {
    setViewDelete(true);
  };
  const handleDeleteClose = () => {
    setViewDelete(false);
  };

  // Add data
  const [ViewAdd, setViewAdd] = useState(false);
  const handleAddShow = () => {
    setEdit(false);
    setViewAdd(true);
  };

  const handleAddClose = () => {
    setViewAdd(false);
  };

  // Local Variable Storage

  const [id, setId] = useState("");
  const [isEdit, setEdit] = useState(false);

  //Get all product data
  const GetProductData = () => {
    const url = "http://localhost:3000/api/user";
    axios
      .get(url)
      .then((res) => {
        const result = res.data;
        console.log(result);
        // const {status, message, data} = result;
        if (!result) {
          alert("no data");
        } else {
          setData(result);
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handle Edit Function
  // const handleEdit = () => {
  //   const url = `http://localhost:3000/api/user/${id}`
  //   // const new_data = { "productId": id, productName, productOwnerName, Developers, scrumMasterName, startDate, 'methodology':methodology.value }
  //   axios.put(url, new_data)
  //     .then(res => {
  //       const result = res.data;
  //       if (!result) {
  //         alert(result.message)
  //       } else {
  //         alert(result.message)
  //         window.location.reload()
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  //handle Delete Function
  const handleDelete = () => {
    const url = `http://localhost:3000/api/delete/${id}`;
    axios
      .delete(url)
      .then((res) => {
        const result = res.data;
        // const { status, message } = result;
        if (!result) {
          alert(result.message);
        } else {
          alert(result.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  const [globalFilter, setGlobalFilter] = useState(null);

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      
      <div className="d-flex justify-content-start p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/create" >
          <Button variant="primary">
            <i className="fa fa-plu"></i>
            Add New Product
          </Button>
        </Link>
      </div>
    </div>
  );

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <React.Fragment >
        <Link to="/edit" state={{info:rowData, isEdit:true}}>
          <Bt
            icon="pi pi-pencil"
            rounded
            outlined
            className="mr-2"
            onClick={() => {handleEditShow(rowData)}}
          />
           </Link>

          <Bt
            icon="pi pi-trash"
            rounded
            outlined
            severity="danger"
            onClick={() => {handleDeleteShow(setRowData(rowData), setId(rowData.productId));}}
          />
        </React.Fragment>
      </>
    );
  };

  useEffect(() => {
    GetProductData();
  }, []);

  return (
    <div
      class="container-xl"
      style={{ marginTop: "50pt", marginBottom: "50pt" }}
    >
      <div className="row">
        {/* <div className="mt-5 mb-4">
          <Link to="/create">
            <Button variant="primary">
              <i className="fa fa-plu"></i>
              Add New Product
            </Button>
          </Link>
        </div> */}
        <div className="row">
          <DataTable
            value={Data}
            paginator
            rows={10}
            dataKey="productId"
            filterDisplay="row"
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            emptyMessage="No customers found."
            globalFilter={globalFilter}
            header={header}
          >
            <Column
              field="productName"
              header="Product Name"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="productOwnerName"
              header="Product Owner Name"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="Developers"
              header="Developers"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="scrumMasterName"
              header="Scrum Master Name"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="startDate"
              header="Start Date"
              sortable
              style={{ width: "30%" }}
            ></Column>
            <Column
              field="methodology"
              header="Methodology"
              sortable
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="Action"
              header="Action"
              sortable
              style={{ width: "25%" }}
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>

      {/* delete product */}
      <div className="model-box-view">
        <Modal
          show={ViewDelete}
          onHide={handleDeleteClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <h4>Are sure you want to delete this product!</h4>
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Anyway Delete Product
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
