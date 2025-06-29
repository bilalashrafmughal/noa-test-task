import React from "react";
import Layout from "../../../layout";
import { HiArrowDownTray } from "react-icons/hi2";

const Dashboard = () => {
  // Sample project data - this would typically come from an API
  const projects = [
    {
      id: 1,
      name: "Branding",
      progress: 60,
      status: "In Progress",
      color: "bg-blue-500",
    },
  ];

  const handleDownloadLatest = () => {
    // This would typically trigger a download from your backend
    console.log("Downloading latest delivery...");
    // For demo purposes, we'll show an alert
    alert("Download started! Your latest delivery will be downloaded shortly.");
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome back! Here's an overview of your project progress and
              latest updates.
            </p>

            {/* Download Button */}
            <button
              onClick={handleDownloadLatest}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <HiArrowDownTray className="w-5 h-5 mr-2" />
              Download Latest Delivery
            </button>
          </div>
        </div>

        {/* Project Progress Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Project Progress
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-gray-700">
                      {project.progress}%
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.progress >= 80
                          ? "bg-green-100 text-green-800"
                          : project.progress >= 50
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ease-out ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>

                {/* Progress Description */}
                <p className="text-sm text-gray-600">
                  {project.progress >= 80
                    ? "Almost complete! Final touches in progress."
                    : project.progress >= 50
                    ? "Good progress! Halfway through the project."
                    : "Getting started. Early development phase."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
