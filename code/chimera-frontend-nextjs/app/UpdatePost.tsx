import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: any | null;
  isDisabled: Boolean;
  header: String;
}

const UpdatePost: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  details,
  isDisabled,
  header,
}) => {
  const [formData, setFormData] = useState();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const formatDatetime = (datetime: any) => {
    const date = new Date(datetime);
    return date.toISOString().slice(0, 19).replace("T", " "); // Converts '2024-11-19T21:37:00.000Z' to '2024-11-19 21:37:00'
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: any) => {
    const selectedId = event.target.value;
    setSelectedLocation(selectedId);
  };

  useEffect(() => {
    axios.get("http://localhost:9000/api/locations").then((res) => {
      setLocations(res.data);
    });
    setFormData(details);
    setSelectedLocation(details?.location_locationid);
  }, [details]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const id = details.reportid; // Getting the report ID from details
    const updatedData = {
      ...formData,
      datetime: formatDatetime(formData.datetime),
    }; // Format the datetime field

    axios
      .put(`http://localhost:9000/api/reports/${id}`, updatedData)
      .then((response) => {
        // Handle successful update
        console.log("Report updated successfully:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating the report:", error);
      });
  };

  const handleApproveDecline = async (status: any) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/updateReportStatus/${details.reportid}`, // URL to your backend API
        { status } // Request body with status value
      );

      // Handle success response
      console.log("Report status updated:", response.data.message);
      onClose()
      toast.success(`The report has been ${status}`)

      // Optionally, you can update the UI or refresh data here
    } catch (error) {
      // Handle error response
      console.error("Error updating report status:", error);
      alert("Failed to update report status.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative p-6 space-y-6 leading-none xs:w-[90%] md:w-[60%] rounded-lg bg-zinc-100 dark:bg-slate-700 ring-1 ring-gray-900/5 text-gray-700 dark:text-white">
        <h2 className="text-lg font-bold">Edit Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              disabled={isDisabled || false}
              id="title"
              name="title"
              value={formData?.title || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Posted DateTime */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="datetime">
              Posted At
            </label>
            <input
              type="datetime-local"
              id="datetime"
              disabled={isDisabled || false}
              name="datetime"
              value={
                formData?.datetime
                  ? new Date(formData.datetime).toISOString().slice(0, 16)
                  : ""
              }
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Location Details */}
          <div>
            <label
              htmlFor="location-select"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Location of the event:
            </label>
            <select
              id="location-select"
              value={selectedLocation}
              disabled={isDisabled || false}
              onChange={handleSelectChange}
              className={`w-full p-2 mt-1 rounded bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100`}
            >
              <option value="">-- Choose a location --</option>
              {locations?.map((location) => (
                <option key={location.locationid} value={location.locationid}>
                  {location.building_name} - {location.roomdetails}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="reportedevidence"
            >
              Description
            </label>
            <textarea
              disabled={isDisabled || false}
              id="reportedevidence"
              name="reportedevidence"
              value={formData?.reportedevidence || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>

          {/* Buttons */}
          {!isDisabled ? (
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => handleApproveDecline("approved")}
              >
                Approve
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded"
                onClick={() => handleApproveDecline("denied")}
              >
                Decline post
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
