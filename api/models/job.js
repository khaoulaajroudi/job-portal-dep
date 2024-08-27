const mongoose=require('mongoose')
const Schema=mongoose.Schema
const jobSchema = new Schema({
    title: String,
    company: String,
    location: String,
    description: String,
    requirements: [String],
    salary: Number,
    postedDate: { type: Date, default: Date.now }
  });
  
  module.exports= Job = mongoose.model('Job', jobSchema);
  