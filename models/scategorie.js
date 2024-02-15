const mongoose =require("mongoose")
const Categorie =require("./categorie.js");
const scategorieSchema=mongoose.Schema({
    //les attributs 
nomscategorie:{ type: String, required: true },
imagescat :{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,// id de type objet 
ref:Categorie}
})
module.exports=mongoose.model('scategorie',scategorieSchema)