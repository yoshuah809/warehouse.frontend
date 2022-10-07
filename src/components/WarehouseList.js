import { useContext, useState } from "react";
import { WarehouseContext } from "../context/WarehouseContext";
import { Table, Button } from "react-bootstrap";
import WarehouseModal from "./WarehouseModal";

const WarehouseList = () => {
  const { warehouseData } = useContext(WarehouseContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [warehouse, setWarehouse] = useState({});

  const updateWarehouse = warehouse => {
    setWarehouse(warehouse);
    handleShow();
  };
  return (
    <div className="App mt-4 py-3">
      <div className="container">
        <button
          className="btn btn-outline-primary mb-3"
          // onClick={() => openCloseInsertModal()}
        >
          ADD CATEGORY
        </button>
        <h2>LIST OF Category</h2>
        <Table className="table  table-default table-striped table-hover responsible">
          <thead bgColor="bg-blue">
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>PHONE NUMBER</th>
              <th>CAPACITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {warehouseData &&
              warehouseData.map(warehouse => (
                <tr key={warehouse._id}>
                  <td>{warehouse.name}</td>
                  <td>{warehouse.address}</td>
                  <td>{warehouse.phoneNumber}</td>
                  <td>{warehouse.fullCapacity} SQF</td>

                  <td>
                    <Button
                      variant="btn btn-outline-success mx-2"
                      onClick={() => updateWarehouse(warehouse)}
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                    <Button
                      // onClick={() => selectEngine(engine)}
                      variant="btn btn-outline-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
          <WarehouseModal
            show={show}
            onHide={handleClose}
            warehouse={warehouse}
            setWarehouse={setWarehouse}
          />
        </Table>
      </div>
    </div>
  );
};

export default WarehouseList;
