const router = require("express").Router();
const Categorie = require("../models/categorie");
const verify = require("../verifyToken");

//Creer

router.post("/", verify, async (req, res) => {
  
    const nouvelCategorie = new Categorie(req.body);
    try {
      const savedCategorie = await nouvelCategorie.save();
      res.status(201).json(savedCategorie);
    } catch (err) {
      res.status(500).json(err);
    }
  }


);

//modifier

router.put("/:id", verify, async (req, res) => {
    try {
      const modifierCategorie = await Categorie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(modifierCategorie);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//supprimer

router.delete("/:id", verify, async (req, res) => {
  if (req.utilisateur.isAdmin) {
    try {
      await Categorie.findByIdAndDelete(req.params.id);
      res.status(200).json("Categorie Est supprimer...");
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
    const categorie= await Categorie.findById(req.params.id);
    res.status(200).json(categorie);
  } catch (err) {
    res.status(500).json(err);
  }
});


//recherche Tous

router.get("/", verify, async (req, res) => {
  
    try {
      const categories = await Categorie.find();
      res.status(200).json(categories.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } );

module.exports = router;