const mongoose=require('mongoose')

const FournisseurSchema= new mongoose.Schema({
    id_fournisseur : {
        type : String,
        required : true,
        unique: true  
    },
    nom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    tel : {
        type : Number,
        required : true
    },
    adresse : {
        type : String,
        required : true
    }

},{ timestamps: true }
);

module.exports = mongoose.model('Fournisseur',FournisseurSchema)