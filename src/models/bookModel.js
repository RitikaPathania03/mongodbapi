const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.types.ObjectId;


const bookSchema= new mongoose.schema(
    {
        name:{
            type:String,
            require:true,
        },
        author:{
            type:objectId,
            ref: "newAuthor",

        },

        publisher:{
            type: objectId,
            ref: " newPublisher",
        },
        price: Number,
        ratings: Number,
        isHardCover: {
            type:boolean,
            default:false,
        },

        
    
    
    },
    {timestamps:true}

);
module.export=mongoose.model("newBook", bookSchema);
