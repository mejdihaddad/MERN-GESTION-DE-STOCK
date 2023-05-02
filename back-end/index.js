const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const utilisateurRoute = require("./routes/utilisateurs");
const articleRoute = require("./routes/articles");
const fournisseurRoute = require("./routes/fournisseurs");
const categorieRoute = require("./routes/categories");
const employeRoute = require ("./routes/employes");


dotenv.config();


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connecté Avec Succes"))
  .catch((err) => {
    console.error(err);
  });
  app.use(express.json());

  app.use("/api/auth",authRoute);
  app.use("/api/utilisateurs",utilisateurRoute);
  app.use("/api/articles",articleRoute);
  app.use("/api/fournisseurs",fournisseurRoute);
  app.use("/api/categories",categorieRoute);
  app.use("/api/employes",employeRoute);


  app.listen(8800, () => {
    console.log("Backend Marche Bien!");
  });