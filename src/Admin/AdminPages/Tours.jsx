import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LuView } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AdminNavbar from "../AdminComponents/AdminNavbar";

Modal.setAppElement("#root");

const Tours = () => {
  const accessToken = "your-access-token-here";
  const [tours, setTours] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTour, setNewTour] = useState({ title: "", days: "", image: "", overview: "" });
  const [selectedTour, setSelectedTour] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedViewTour, setSelectedViewTour] = useState(null);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch("http://20.244.89.90:8000/tours");
      if (!response.ok) {
        throw new Error("Failed to fetch tours");
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const data = await response.json();
      setTours(data.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const handleAddTour = async () => {
    try {
      console.log("Sending new tour data:", newTour); // Debug log
      const response = await fetch("http://20.244.89.90:8000/tours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newTour),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Capture error text from the response
        console.error("Response error text:", errorText); // Log error text
        throw new Error("Failed to add tour");
      }

      fetchTours();
      closeModal();
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  };

  const handleEditTour = async () => {
    try {
      const response = await fetch(`http://20.244.89.90:8000/tours/${selectedTour._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newTour),
      });

      if (!response.ok) {
        throw new Error("Failed to edit tour");
      }
      fetchTours();
      closeModal();
    } catch (error) {
      console.error("Error editing tour:", error);
    }
  };

  const handleDeleteTour = async (tourId) => {
    try {
      const response = await fetch(`http://20.244.89.90:8000/tours/${tourId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete tour");
      }
      fetchTours();
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const openModal = (tour) => {
    setIsModalOpen(true);
    if (tour) {
      setSelectedTour(tour);
      setNewTour({
        title: tour.title,
        days: tour.days,
        image: tour.photo,
        overview: tour.overview,
      });
    } else {
      setSelectedTour(null);
      setNewTour({ title: "", days: "", image: "", overview: "" });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewTour({ title: "", days: "", image: "", overview: "" });
    setSelectedTour(null);
  };

  const openViewModal = (tour) => {
    setIsViewModalOpen(true);
    setSelectedViewTour(tour);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedViewTour(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTour({ ...newTour, [name]: value });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Tours</h1>
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Tour
        </button>
      </div>
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="px-4 py-2">S no.</th>
            <th className="px-4 py-2">Name of the Destination</th>
            <th className="px-4 py-2">Overview</th>
            <th className="px-4 py-2">No. of Days</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Controls</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={tour._id} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{tour.title}</td>
              <td className="px-4 py-2">{tour.overview}</td>
              <td className="px-4 py-2">{tour.days}</td>
              <td className="px-4 py-2">
                <img
                  src={tour.photo}
                  alt={tour.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => openViewModal(tour)}
                  className="text-black-500 px-2 py-1 rounded"
                >
                  <LuView />
                </button>
                <button
                  onClick={() => openModal(tour)}
                  className="text-blue-500 px-2 py-1 rounded mx-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteTour(tour._id)}
                  className="text-red-500 px-2 py-1 rounded"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={selectedTour ? "Edit Tour" : "Add Tour"}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl mb-4">{selectedTour ? "Edit Tour" : "Add Tour"}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedTour) {
                handleEditTour();
              } else {
                handleAddTour();
              }
            }}
          >
            <div className="mb-4">
              <label className="block text-slate-950">Name of the Destination</label>
              <input
                type="text"
                name="title"
                value={newTour.title}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-950">Overview</label>
              <input
                type="text"
                name="overview"
                value={newTour.overview}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-950">No. of Days</label>
              <input
                type="number"
                name="days"
                value={newTour.days}
                onChange={handleInputChange}
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slate-950">Image</label>
              <input
                type="text"
                name="image"
                value={newTour.image}
                onChange={handleInputChange}
                placeholder="Enter direct image URL"
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="mr-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {selectedTour ? "Save Changes" : "Add Tour"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onRequestClose={closeViewModal}
        contentLabel="View Tour"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl mb-4">View Tour</h2>
          {selectedViewTour && (
            <div>
              <p><strong>Name:</strong> {selectedViewTour.title}</p>
              <p><strong>Overview:</strong> {selectedViewTour.overview}</p>
              <p><strong>No. of Days:</strong> {selectedViewTour.days}</p>
              <p>
                <strong>Image:</strong>
                <img
                  src={selectedViewTour.photo}
                  alt={selectedViewTour.title}
                  className="w-32 h-32 object-cover mt-2"
                />
              </p>
              <div className="flex gap-5 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    openModal(selectedViewTour);
                    closeViewModal();
                  }}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={closeViewModal}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Tours;
