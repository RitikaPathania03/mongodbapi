const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.types.ObjectId


const bookSchema= new mongoose.schema(
    {
        name:{
            type:String,
            require:true,
        },
        author_id:{
            type:ObjectId,
            ref: "Author",

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
module.export=mongoose.model("MyBooks", bookSchema);
