const router = require("express").Router();
const Utilisateur = require("../models/utilisateur");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


//Modifier


router.put("/:id", verify, async (req, res) => {
    if (req.utilisateur.id === req.params.id || req.utilisateur.isAdmin) {
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
      }
  
      try {
        const modifierUtilisateur = await Utilisateur.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(modifierUtilisateur);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can update only your account!");
    }
  });
  
//Supprimer
router.delete("/:id", verify, async (req, res) => {
    if (req.utilisateur.id === req.params.id || req.utilisateur.isAdmin) {
      try {
        await Utilisateur.findByIdAndDelete(req.params.id);
        res.status(200).json("Utilisateur a ete supprimer");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("tu peut supprimer que ton compte");
    }
  });
//Recherche
router.get("/recherche/:id", async (req, res) => {
    try {
      const utilisateur = await Utilisateur.findById(req.params.id);
      const { mot_de_passe, ...info } = utilisateur._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Recherche Tous
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.utilisateur.isAdmin) {
      try {
        const utilisateurs = query
          ? await Utilisateur.find().sort({ _id: -1 }).limit(5)
          : await Utilisateur.find();
        res.status(200).json(utilisateurs);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("tu est pas autorise de voir tous les utilisateurs");
    }
  });
  module.exports = router;

  
  