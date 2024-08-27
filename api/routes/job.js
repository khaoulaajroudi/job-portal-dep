
const express=require('express')
const Job=require('../models/job')
const jobRouter=express.Router()


jobRouter.get('/all', async (req, res) => {
    try {
      const jobs = await Job.find();
      res.json(jobs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  jobRouter.get('/:id', async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) return res.status(404).json({ message: "Offre d'emploi non trouvée" });
      res.json(job);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  jobRouter.post('/add', async (req, res) => {
    const job = new Job(req.body);
    try {
      const newJob = await job.save();
      res.status(201).json(newJob);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  jobRouter.put('/:id', async (req, res) => {
    try {
      const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedJob) return res.status(404).json({ message: "Offre d'emploi non trouvée" });
      res.json(updatedJob);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  jobRouter.delete('/:id', async (req, res) => {
    try {
      const job = await Job.findByIdAndDelete(req.params.id);
      if (!job) return res.status(404).json({ message: "Offre d'emploi non trouvée" });
      res.json({ message: "Offre d'emploi supprimée" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports=jobRouter