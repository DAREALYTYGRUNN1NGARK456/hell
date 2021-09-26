const { model, Schema } = require("mongoose");

module.exports = model("logging", new Schema({

    _ID     : String,
    Guild: String,
    Expire: Number,
    Permanent: Boolean,  
    Guild: String, 
    

}));