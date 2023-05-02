const mongoose=require('mongoose')

const EmployeSchema=new mongoose.Schema({
    id_employe : {
        type : String,
        required : true,
        unique: true 
    },
    nom : {
        type : String,
        required : true
    },
    service: {
        type : String,
        required : true
    },
    fonction: {
        type : String,
        required : true
    },
   
},{ timestamps: true }
);

module.exports = mongoose.model("Employe", EmployeSchema);