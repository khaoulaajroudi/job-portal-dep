import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../js/jobSlice';

function JobDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id)
  useEffect(() => {
      dispatch(fetchJobs());
  }, );
  const job2 = useSelector((state) => state.jobs?.jobs)
  console.log("ahi jobé",job2)
  var job=0
job2.map((el)=>el._id==id ? job=el:null)
console.log(job)
  if (!job) return <div className="loading">Loading...</div>;

  return (
    <div className="job-details-container">
      <h1 className="job-title">{job.title}</h1>
      <h2 className="company-name">{job.company}</h2>
      <p className="job-description">{job.description}</p>
      <button className="apply-button">Apply Now</button>
    </div>
  );
}

export default JobDetails;