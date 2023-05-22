import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Crud = () => {
  const [addFormData, setAddFormData] = useState({
    id: "",
    title: "",
    price: "",
    desc: "",
    img: "",
    product: "",
  });

  const handleAddFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setAddFormData({ ...addFormData, [fieldName]: fieldValue });
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://16.16.115.134:5000/menu/add",
        addFormData
      );
      console.log(response.data);
      // Reset the form fields
      setAddFormData({
        id: "",
        title: "",
        price: "",
        desc: "",
        img: "",
        product: "",
      });
      history.push("/products");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const [updateFormData, setUpdateFormData] = useState({
    id: "",
  });

  const handleUpdateFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setUpdateFormData({ ...updateFormData, [fieldName]: fieldValue });
  };

  const history = useHistory();

  const handleUpdateFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://16.16.115.134:5000/menu/update/${updateFormData.id}`,
        updateFormData
      );
      console.log(response.data);
      // Reset the form field
      setUpdateFormData({ id: "" });

      // Redirect to "/products" after successful update
      history.push("/products");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const [deleteFormData, setDeleteFormData] = useState({
    id: "",
  });

  const handleDeleteFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setDeleteFormData({ ...deleteFormData, [fieldName]: fieldValue });
  };

  const handleDeleteFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(
        `http://16.16.115.134:5000/menu/remove/${deleteFormData.id}`
      );
      console.log(response.data);
      // Reset the form field
      setDeleteFormData({ id: "" });
      history.push("/products");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <Fragment>
      <div className="container my-5 bg-dark text-white">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Add Product</h4>
              <form
                className="needs-validation"
                onSubmit={handleAddFormSubmit}
                noValidate
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="add-id" className="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-id"
                      name="id"
                      placeholder=""
                      value={addFormData.id}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid ID is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="add-title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-title"
                      name="title"
                      placeholder=""
                      value={addFormData.title}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid title is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="add-price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-price"
                      name="price"
                      placeholder=""
                      value={addFormData.price}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid price is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="add-desc" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-desc"
                      name="desc"
                      placeholder=""
                      value={addFormData.desc}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid description is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="add-img" className="form-label">
                      Image
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-img"
                      name="img"
                      placeholder=""
                      value={addFormData.img}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid image URL is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="add-product" className="form-label">
                      Product
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="add-product"
                      name="product"
                      placeholder=""
                      value={addFormData.product}
                      onChange={handleAddFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid product is required.
                    </div>
                    <hr className="my-4" />
                    <button
                      type="submit"
                      className="btn btn-outline-primary px-4 py-2 text-white"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <hr className="my-4" />

            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Update Product</h4>
              <form
                className="needs-validation"
                onSubmit={handleUpdateFormSubmit}
                noValidate
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="update-id" className="form-label">
                      ID
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="update-id"
                      name="id"
                      placeholder=""
                      value={updateFormData.id}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid ID is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="update-title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="update-title"
                      name="title"
                      placeholder=""
                      value={updateFormData.title}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid title is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="update-price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="update-price"
                      name="price"
                      placeholder=""
                      value={updateFormData.price}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid price is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="update-desc" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="update-desc"
                      name="desc"
                      placeholder=""
                      value={updateFormData.desc}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid description is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="update-img" className="form-label">
                      Image
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="update-img"
                      name="img"
                      placeholder=""
                      value={updateFormData.img}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid image URL is required.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="update-product" className="form-label">
                      Product
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="update-product"
                      name="product"
                      placeholder=""
                      value={updateFormData.product}
                      onChange={handleUpdateFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid product is required.
                    </div>
                    <hr className="my-4" />
                    <button
                      type="submit"
                      className="btn btn-outline-primary px-4 py-2 text-white"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <hr className="my-4" />
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Delete Product</h4>
              <form
                className="needs-validation"
                onSubmit={handleDeleteFormSubmit}
                noValidate
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="delete-id" className="form-label">
                      ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delete-id"
                      name="id"
                      placeholder=""
                      value={deleteFormData.id}
                      onChange={handleDeleteFormChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid ID is required.
                    </div>
                    <hr className="my-4" />
                    <button
                      type="submit"
                      className="btn btn-outline-primary px-4 py-2 text-white"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Crud;
