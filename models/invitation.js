const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 
  event: { type: Schema.Types.ObjectId, ref: 'Event'},
  sender:  { type: Schema.Types.ObjectId, ref: 'User' },
  receiver:  { type: Schema.Types.ObjectId, ref: 'User' },
  created:{ type: Date, default: Date.now },
  invitationstatus:{ type: String, required: true },
  
  
  
    
  
});

const Invitation = mongoose.model("Invitation", bookSchema);

module.exports = Invitation;