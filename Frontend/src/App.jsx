import React, { useEffect, useState } from "react";

const ChatApp = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetchJobsData();
      if (response.error) {
        setError(response.error);
      } else {
        setJobs(response.data);
      }
    };

    fetchJobs();
  }, []);

  // New function to handle fetching job data
  const fetchJobsData = async () => {
    try {
      const response = await fetch("http://localhost:3010/api/jobs");
      if (!response.ok) throw new Error("Failed to fetch jobs");
      const data = await response.json();
      return { data }; // Return data on success
    } catch (error) {
      return { error: error.message }; // Return error on failure
    }
  };

  return (
    <div className="ChatApp">
      <h1>Job Listings</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {jobs.map((job, index) => (
          // <li key={index}>{job.job_position}</li> // Assuming job objects have a 'title' property
          <li key={index}>{job.company_name}</li> // Assuming job objects have a 'title' property
        ))}
      </ul>
    </div>
  );
};

export default ChatApp;