import React, { useEffect, useState } from "react";

const ChatApp = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch job data from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3010/api/jobs");
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="ChatApp">
      <h1>Job Listings</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li> // Assuming job objects have a 'title' property
        ))}
      </ul>
    </div>
  );
};

export default ChatApp;
