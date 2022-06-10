const mongoose = require('mongoose');
const publisherSchema= new mongoose.schema(
{
    Name:String,
    HeadQuarter: String,

},


);
module.export=mongoose.model("newPublisher", publisherSchema);
