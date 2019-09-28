const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  host:  { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
  participant: [
      { type: Schema.Types.ObjectId, ref: 'User' }
  ],
  data: [
    { type: Schema.Types.ObjectId, ref: 'Data' }
]
  
});

const Event = mongoose.model("Event", bookSchema);

module.exports = Event;