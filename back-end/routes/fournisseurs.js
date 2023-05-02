const router = require("express").Router();
const Fournisseur = require("../models/fournisseur");
const verify = require("../verifyToken");

//Creer

router.post("/", verify, async (req, res) => {
    const nouvelFournisseur = new Fournisseur(req.body);
    try {
      const savedFournisseur = await nouvelFournisseur.save();
      res.status(201).json(savedFournisseur);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//modifier

router.put("/:id", verify, async (req, res) => {
 
    try {
      const modifierFournisseur = await Fournisseur.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(modifierFournisseur);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//supprimer

router.delete("/:id", verify, async (req, res) => {
  if (req.utilisateur.isAdmin) {
    try {
      await Fournisseur.findByIdAndDelete(req.params.id);
      res.status(200).json("Fournisseur Est supprimer...");
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
    const fournisseur = await Fournisseur.findById(req.params.id);
    res.status(200).json(fournisseur);
  } catch (err) {
    res.status(500).json(err);
  }
});



//GET ALL

router.get("/", verify, async (req, res) => {
    try {
      const fournisseurs = await Fournisseur.find();
      res.status(200).json(fournisseurs.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } );

module.exports = router;