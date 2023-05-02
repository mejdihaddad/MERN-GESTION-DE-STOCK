const router = require("express").Router();
const Article = require("../models/article");
const verify = require("../verifyToken");

//Creer

router.post("/", verify, async (req, res) => {
  
    const nouvelArticle = new Article(req.body);
    try {
      const savedArticle = await nouvelArticle.save();
      res.status(201).json(savedArticle);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//modifier

router.put("/:id", verify, async (req, res) => {
    try {
      const modifierArticle = await Article.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(modifierArticle);
    } catch (err) {
      res.status(500).json(err);
    }
  } );

//supprimer

router.delete("/:id", verify, async (req, res) => {
  if (req.utilisateur.isAdmin) {
    try {
      await Article.findByIdAndDelete(req.params.id);
      res.status(200).json("Article Est supprimer...");
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
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});



//recherche Tous

router.get("/", verify, async (req, res) => {
  
    try {
      const articles = await Article.find();
      res.status(200).json(articles.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } );

module.exports = router;