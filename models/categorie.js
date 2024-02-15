const mongoose =require("mongoose")

const categorieSchema=mongoose.Schema({
    //les attributs 
nomcategorie:{ type: String, required: true,unique:true },
imagecategorie :{ type: String, required: false }
})
module.exports=mongoose.model('categorie',categorieSchema)