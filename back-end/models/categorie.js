const mongoose=require('mongoose')

const CategorieSchema= new mongoose.Schema({
    id_categorie : {
        type : String,
        required : true,
        unique: true
    },
    nom : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

},{ timestamps: true }
);

module.exports =mongoose.model('Categorie',CategorieSchema)