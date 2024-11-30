import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: any | null;
}

const ViewMore: React.FC<ModalProps> = ({ isOpen, onClose, details }) => {
  console.log(details);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {" "}
      <div className="relative p-6 space-y-6 leading-none xs:w-[90%] md:w-[60%] rounded-lg bg-zinc-100 dark:bg-slate-700 ring-1 ring-gray-900/5 text-gray-700 dark:text-white">
        <h2 className="text-lg font-bold">{details?.title || "No Title"}</h2>
        <p>
          Posted at:{" "}
          {details?.datetime
            ? new Date(details.datetime).toLocaleString()
            : "N/A"}
        </p>
        <p>
          <strong>Written by:</strong>{" "}
          {details?.user_name || details?.is_anonumous || "Anonymous"}
        </p>
        <p>
          <strong>Location of the Event:</strong>{" "}
          {details?.location_details || "N/A"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {details?.reportedevidence || "No Description"}
        </p>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
