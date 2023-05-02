const router = require("express").Router();
const Utilisateur = require("../models/utilisateur");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//Register
router.post("/register", async (req, res) => {
    const nouvelUtilisateur = new Utilisateur({
        id_utilisateur: req.body.id_utilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        
        email: req.body.email,
        genre: req.body.genre,
        tel: req.body.tel,
        mot_de_passe: CryptoJS.AES.encrypt(
            req.body.mot_de_passe,
            process.env.SECRET_KEY
          ).toString(),

    });
    try{
     const utilisateur = await nouvelUtilisateur.save();
     res.status(201).json(utilisateur);
    }catch(err){
        res.status(500).json(err);
    }
    
});
//Login
router.post("/login", async (req, res) =>{
    try{
         const utilisateur = await Utilisateur.findOne({email:req.body.email});
         if (!utilisateur)
         {
            res.status(401).json("Email Introuvable");
            return;
         }

         const bytes = CryptoJS.AES.decrypt(utilisateur.mot_de_passe, process.env.SECRET_KEY);
         const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        
         if (originalPassword !== req.body.mot_de_passe)
         {
            res.status(401).json("Mot De Passe Incorrect");
            return;
         }
         const accessToken = jwt.sign(
            { id: utilisateur._id, isAdmin: utilisateur.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
          );
         const {mot_de_passe,...info}=utilisateur._doc;

         res.status(200).json({...info,accessToken});
    }catch(err){
        res.status(500).json(err)
    }
});
module.exports =router;