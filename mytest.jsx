<h4 className="mb-3">Update Product</h4>
<form className="needs-validation" onSubmit={handleUpdateFormSubmit} noValidate>
  <div className="row g-3">
    <div className="col-sm-6">
      <label htmlFor="Update-id" className="form-label">ID</label>
      <input
        type="text"
        className="form-control"
        id="Update-id"
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
      <label htmlFor="Update-title" className="form-label">Title</label>
      <input
        type="text"
        className="form-control"
        id="Update-title"
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
      <label htmlFor="Update-price" className="form-label">Price</label>
      <input
        type="text"
        className="form-control"
        id="Update-price"
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
      <label htmlFor="Update-desc" className="form-label">Description</label>
      <input
        type="text"
        className="form-control"
        id="Update-desc"
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
      <label htmlFor="Update-img" className="form-label">Image</label>
      <input
        type="text"
        className="form-control"
        id="Update-img"
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
      <label htmlFor="Update-product" className="form-label">Product</label>
      <input
        type="text"
        className="form-control"
        id="Update-product"
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
      <button type="submit" className="btn btn-outline-primary px-4 py-2 text-white">Update</button>
    </div>
  </div>
</form>
</div>
<hr className="my-4" />

<div className="col-md-7 col-lg-8"></div>