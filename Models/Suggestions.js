const { model, Schema } = require("mongoose");

module.exports = model("Suggestions", new Schema({

    _ID     : String,
    channelID : String
    

}));