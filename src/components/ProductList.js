import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import moment from "moment";
import { Table, Button } from "react-bootstrap";
import AddProductModal from "./AddProductModal";

const ProductList = () => {
  const { productData } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({
    _id: "",
    description: "",
    code: "",
    name: "",
    price: "",
    SpaceRequired: "",
    warehouse: "",
    dateCreated: "",
  });
  const handleClose = () => setShow(false);

  const updateProduct = product => {
    setProduct(product);
    handleShow();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="App mt-4 py-3">
      <div className="container">
        <button
          className="btn btn-outline-primary mb-3"
          // onClick={() => openCloseInsertModal()}
        >
          ADD PRODUCT
        </button>
        <h2>LIST OF PRODUCTS</h2>
        <Table className="table  table-default table-striped table-hover responsible">
          <thead bgColor="bg-blue">
            <tr>
              {/* <th>ID</th> */}
              <th>Code</th>
              <th>Description</th>
              <th>Name</th>
              <th>Price</th>
              <th>Space Required</th>
              <th>WareHouse</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productData &&
              productData.map(product => (
                <tr key={product._id}>
                  {/* <td>{product._id}</td> */}
                  <td>{product.code}</td>
                  <td>{product.description}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.spaceRequired} SQF</td>
                  <td>{product.warehouse.name}</td>
                  <td>{moment(product.createdAt).format("MM/DD/YYYY")}</td>
                  <td>
                    <Button
                      variant="btn btn-outline-success mx-2"
                      // onClick={() => updateProduct(product)}
                      onClick={() => updateProduct(product)}
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
          <AddProductModal
            show={show}
            onHide={handleClose}
            product={product}
            handleChange={handleChange}
          />
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
