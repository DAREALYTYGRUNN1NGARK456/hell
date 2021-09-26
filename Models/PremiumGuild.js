const { model, Schema } = require("mongoose");

module.exports = model("PremiumGuild", new Schema({

    Guild: String,
    Expire: Number,
    Permanent: Boolean,
    

}));