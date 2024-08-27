import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../js/jobSlice';
import { Link } from 'react-router-dom';

function JobList() {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state) => state.jobs);
  console.log(jobs)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobs());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div className="loading">Loading...</div>;
  if (status === 'failed') return <div className="error">Error: {error}</div>;

  return (
    <div className="job-list-container">
      <h1>Explore More Than 5000+ Jobs</h1>
      <div className="search-container">
        <input type="text" placeholder="Job Title or Keyword" className="search-input" />
        <input type="text" placeholder="Location" className="search-input" />
        <button className="search-button">Search Job</button>
      </div>
      <div className="job-grid">
        {jobs.map((job) => (
          <div key={job._id} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-company">{job.company}</p>
            <Link to={`/job/${job._id}`} className="job-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;