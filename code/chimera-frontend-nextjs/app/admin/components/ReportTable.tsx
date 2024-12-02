import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdatePost from "@/app/UpdatePost";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ReportTable = () => {
  const [reports, setReports] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reports from API on component mount
  const fetchReports = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/reports");
      setReports(response.data); // Store the fetched reports in state
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch reports");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    fetchReports();
  }, [isOpen]);

  const onClose = () => {
    setIsOpen(false);
  };

  // View report
  const handleViewReport = (report) => {
    setSelectedReport(report);
    setIsOpen(true);
  };

  // Approve report
  const handleApproveReport = async (reportId) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/reports/approve/${reportId}`
      );
      if (response.status === 200) {
        // Update the report list with the new status after approval
        setReports(
          reports.map((report) =>
            report.reportid === reportId
              ? { ...report, status: "Approved" }
              : report
          )
        );
      }
    } catch (error) {
      console.error("Error approving report", error);
    }
  };

  // Delete report
  const handleDeleteReport = async (reportId) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/api/reports/${reportId}`
      );
      if (response.status === 200) {
        // Remove the deleted report from the state
        setReports(reports.filter((report) => report.reportid !== reportId));
      }
    } catch (error) {
      console.error("Error deleting report", error);
    }
  };

  if (loading) return <div>Loading reports...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Report ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Date & Time
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Location
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {reports.map((report) => (
            <tr
              key={report.reportid}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <td className="px-6 py-4">{report.reportid}</td>
              <td className="px-6 py-4">{report.title}</td>
              <td className="px-6 py-4">
                {new Date(report.datetime).toLocaleString()}
              </td>
              <td className="px-6 py-4">{report.location}</td>
              <td className="px-6 py-4">
                <p className="line-clamp-2">{report.reportedevidence}</p>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`
      ${report.status === "approved" ? "text-green-500" : ""}
      ${report.status === "denied" ? "text-red-500" : ""}
      ${report.status === "pending" ? "text-gray-500" : ""}
    `}
                >
                  {report.status || "Pending"}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-1">
                <button
                  className="ml-2 px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  onClick={() => handleViewReport(report)}
                >
                  <FaMagnifyingGlass />
                </button>
                <button
                  className="ml-2 px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                  onClick={() => handleDeleteReport(report.reportid)}
                >
                  <MdDelete fontSize={'20px'}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdatePost
        isOpen={isOpen}
        details={selectedReport}
        isDisabled={true}
        onClose={onClose}
        header={"Reports"}
      />
    </div>
  );
};

export default ReportTable;
