import { Button, Form, Modal } from "react-bootstrap";

const AddProductModal = ({ show, onHide, product, handleChange }) => {
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
          // onChange={handleChange}
          disabled
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
        />
        <Form.Control
          placeholder="Category"
          name="category"
          onChange={handleChange}
          className="mb-3"
          value={product.warehouse._id}
        />
        <Form.Control
          placeholder="Date Created"
          name="createdAt"
          onChange={handleChange}
          className="mb-3"
          value={product.createdAt}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={console.log(product)} variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
