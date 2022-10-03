import axios from "./AxiosServices";

//Create new Registry - Create
export function addProduct(product) {
  return axios.post("products" + product);
}
//Display all Registry (Read)
export function getProducts() {
  return axios.get("products");
}

//Update the Registry (Update)
export function updateProduct(product) {
  return axios.put("product/" + product);
}

//Delete the  Registry (Delete)
export function editproduct(product) {
  return axios.delete("product/", product);
}
