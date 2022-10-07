import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { WarehouseContext } from "../context/WarehouseContext";
import moment from "moment";

const AddProductModal = ({ show, onHide, product, handleChange }) => {
  const { updateProduct } = useContext(ProductContext);
  const { warehouseData } = useContext(WarehouseContext);
  const warehouses = warehouseData;

  const handleUpdate = product => {
    updateProduct(product);
    onHide();
    //console.log(product);
  };

  return (
    <Modal show={show}>
      <Modal.Header
        onClick={onHide}
        style={{ backgroundColor: "#0d6efd" }}
        closeButton
      >
        <Modal.Title>Update a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label htmlFor="_id">Id:</Form.Label>
        <Form.Control
          placeholder="ID"
          name="_id"
          className="mb-3"
          readOnly
          value={product._id}
        />
        <Form.Label htmlFor="code">Code:</Form.Label>
        <Form.Control
          placeholder="code"
          name="code"
          onChange={handleChange}
          className="mb-3"
          value={product.code}
        />
        <Form.Control
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="mb-3"
          value={product.name}
        />
        <Form.Control
          placeholder="description"
          name="description"
          onChange={handleChange}
          className="mb-3"
          value={product.description}
        />
        <Form.Control
          placeholder="Price"
          name="price"
          onChange={handleChange}
          className="mb-3"
          value={product.price}
          type="number"
        />
        <Form.Control
          placeholder="Space Required"
          name="spaceRequired"
          onChange={handleChange}
          className="mb-3"
          value={product.spaceRequired}
          type="number"
        />
        <Form.Select
          placeholder="Warehouse"
          name="warehouse"
          value={product.warehouse || null}
          //onChange={handleChange}
          onChange={handleChange}
          className="mb-3"
        >
          {warehouses &&
            warehouses.map(warehouse => (
              <option key={warehouse._id} value={warehouse._id}>
                {warehouse.name}
              </option>
            ))}
          {/* <option value="">Choose one ...</option> */}
        </Form.Select>

        <Form.Control
          type="text"
          placeholder="Date Created"
          name="createdAt"
          className="mb-3"
          value={moment(product.createdAt).format("MM/DD/YYYY")}
          readOnly
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={() => handleUpdate(product)} variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
