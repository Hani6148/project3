const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  type: { type: String, required: true },
  link: { type: String, required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event'},
 
  
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  
  date: { type: Date, default: Date.now }
    
  
});

const Data = mongoose.model("Data", bookSchema);

module.exports = Data;