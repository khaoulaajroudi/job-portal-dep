const express=require('express')
const userRouter=express.Router()
const Job=require('../models/job')
const User=require('../models/user')


// Routes pour les utilisateurs
userRouter.post('/api/users/register', async (req, res) => {
    const user = new User(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  userRouter.post('/api/users/login', async (req, res) => {
    // Ici, vous devriez implémenter la logique d'authentification
    // Pour cet exemple, nous supposons simplement que l'utilisateur existe
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });
      // Vérifiez le mot de passe ici (utilisez bcrypt dans une vraie userRouterlication)
      res.json({ message: "Connexion réussie", userId: user._id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  userRouter.post('/api/jobs/:id/userRouterly', async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      const user = await User.findById(req.body.userId);
      if (!job || !user) return res.status(404).json({ message: "Job ou utilisateur non trouvé" });
      
      if (!job.userRouterlicants.includes(user._id)) {
        job.userRouterlicants.push(user._id);
        await job.save();
      }
      if (!user.userRouterliedJobs.includes(job._id)) {
        user.userRouterliedJobs.push(job._id);
        await user.save();
      }
      res.json({ message: "Candidature soumise avec succès" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports=userRouter