import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { WarehouseContext } from "../context/WarehouseContext";
import moment from "moment";

const WarehouseModal = ({ show, onHide, warehouse, setWarehouse }) => {
  const { warehouseData, updateWarehouse } = useContext(WarehouseContext);
  const warehouses = warehouseData;

  const handleUpdate = warehouse => {
    updateWarehouse(warehouse);
    console.log(warehouse);
    onHide();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setWarehouse(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Modal show={show}>
      <Modal.Header
        onClick={onHide}
        style={{ backgroundColor: "#0d6efd" }}
        closeButton
      >
        <Modal.Title>Update warehouse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor="_id">Id:</Form.Label>
        <Form.Control
          placeholder="ID"
          name="_id"
          className="mb-3"
          readOnly
          value={warehouse._id}
        />
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="mb-3"
          value={warehouse.name}
        />
        <Form.Label htmlFor="address">Address</Form.Label>
        <Form.Control
          placeholder="address"
          name="address"
          onChange={handleChange}
          className="mb-3"
          value={warehouse.address}
        />
        <Form.Label htmlFor="phoneNumber">Contact No.</Form.Label>
        <Form.Control
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={handleChange}
          className="mb-3"
          value={warehouse.phoneNumber}
          type="tel"
        />
        <Form.Group className="mb-3">
          <Form.Label htmlFor="capacity">Full Capacity</Form.Label>
          <Form.Control
            placeholder="Capacity"
            name="fullCapacity"
            onChange={handleChange}
            className="mb-3"
            value={warehouse.fullCapacity}
            type="number"
          />
          <Form.Label htmlFor="currentCapacity">Available Capacity</Form.Label>
          <Form.Control
            name="currentCapacity"
            disabled
            className="mb-3"
            value={warehouse.currentCapacity}
            type="number"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={() => handleUpdate(warehouse)} variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarehouseModal;
