const { model, Schema } = require("mongoose");

module.exports = model("Welcome", new Schema({

    _ID     : String,
    channelID : String
    

}));