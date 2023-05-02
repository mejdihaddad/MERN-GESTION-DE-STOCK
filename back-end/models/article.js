const mongoose=require('mongoose')

const ArticleSchema= new mongoose.Schema({
    id_article: {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    date_achat : {
        type : Date,
        required : true,
    },
    fournisseur : {
        type :  String,
        required : false
    },
    prixHT : {
        type : Number,
        required : true
    },
   
    quantite : {
        type : Number,
        required : true
    },
    numero_serie : {
        type : Number,
        required : true
    },
    employe : {
        type : String,
        required : false
    },
    categorie  : {
        type : String,
        required : false
    },
    
    
},{ timestamps: true }
);

module.exports= mongoose.model('Article',ArticleSchema) 