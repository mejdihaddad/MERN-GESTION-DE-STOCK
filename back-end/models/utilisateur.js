const mongoose=require('mongoose')

const UtilisateurSchema=new mongoose.Schema({
    id_utilisateur : {
        type : String,
        required : true,
        unique: true 
    },
    nom : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    email : {
        type : String,
         required : true,
         unique: true  
    },
    genre :  {
        type : String,
        required : true
    },
    tel : {
        type : Number,
        required : true
    },
    mot_de_passe : {
        type : String,
        required : true
    },
  
    isAdmin: { type: Boolean, default: false },
},{ timestamps: true }
);

module.exports = mongoose.model("Utilisateur", UtilisateurSchema);