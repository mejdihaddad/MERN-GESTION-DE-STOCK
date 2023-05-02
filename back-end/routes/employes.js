const router = require("express").Router();
const Employe = require("../models/employe");
const verify = require("../verifyToken");

//Creer

router.post("/", verify, async (req, res) => {
  
    const nouvelEmploye = new Employe(req.body);
    
    try {
      const savedEmploye = await nouvelEmploye.save();
      res.status(201).json(savedEmploye);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//modifier

router.put("/:id", verify, async (req, res) => {
    try {
      const modifierEmploye = await Employe.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(modifierEmploye);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//supprimer

router.delete("/:id", verify, async (req, res) => {
  if (req.utilisateur.isAdmin) {
    try {
      await Employe.findByIdAndDelete(req.params.id);
      res.status(200).json("Employe Est supprimer...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Pas Autorisé");
  }
});

//Recherche

router.get("/recherche/:id", verify, async (req, res) => {
  try {
    const employe = await Employe.findById(req.params.id);
    res.status(200).json(employe);
  } catch (err) {
    res.status(500).json(err);
  }
});



//recherche Tous

router.get("/", verify, async (req, res) => {
    try {
      const employes = await Employe.find();
      res.status(200).json(employes.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;