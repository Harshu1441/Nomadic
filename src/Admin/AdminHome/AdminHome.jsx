


import React, { useState } from 'react';
import './AdminHome.css';
const AdminHome = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    overview: '',
    days: '',
    image: null // Use null for file input
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const openForm = () => {
    setShowForm(true);
    setEditMode(false);
    setNewProduct({
      name: '',
      overview: '',
      days: '',
      image: null
    });
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewProduct({
        ...newProduct,
        image: files[0] // Set the file object
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value
      });
    }
  };

  const addProduct = () => {
    if (editMode) {
      // Update existing product
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }

    setNewProduct({
      name: '',
      overview: '',
      days: '',
      image: null
    });

    closeForm();
  };

  const editProduct = (index) => {
    setShowForm(true);
    setEditMode(true);
    setEditIndex(index);
    // Populate the form with the data of the product being edited
    setNewProduct({
      ...products[index],
      image: null // Reset image input
    });
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
        onClick={openForm}
      >
        Add Product
      </button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 max-w-lg w-full rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); addProduct(); }}>
              <div className="mb-4 inputText">
                <label htmlFor="name" className=" text-violet-950 block text-gray-600 text-sm font-medium">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="overview" className="text-violet-950 block text-gray-600 text-sm font-medium">Overview:</label>
                <input
                  type="text"
                  id="overview"
                  name="overview"
                  value={newProduct.overview}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="days" className="text-violet-950 block text-gray-600 text-sm font-medium">Days:</label>
                <input
                  type="text"
                  id="days"
                  name="days"
                  value={newProduct.days}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="text-violet-950 block text-gray-600 text-sm font-medium">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                >
                  {editMode ? 'Save' : 'Add'}
                </button>
                <button
                  type="button"
                  className="bg-yellow-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">S.No</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Overview</th>
            <th className="py-3 px-6 text-left">Days</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Controls</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{index + 1}</td>
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">{product.overview}</td>
              <td className="py-3 px-6 text-left">{product.days}</td>
              <td className="py-3 px-6 text-left">{product.image ? product.image.name : ''}</td>
              <td className="py-3 px-6 text-left">
                <button
                  className="text-xs text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded mr-2"
                  onClick={() => editProduct(index)}
                >
                  Edit
                </button>
                <button
                  className="text-xs text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded"
                  onClick={() => deleteProduct(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
