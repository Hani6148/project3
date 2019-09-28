const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now } , 
  eventsHosted: [
      { type: Schema.Types.ObjectId, ref: 'Event' }
  ],
  eventsParticipation: [
    { type: Schema.Types.ObjectId, ref: 'Event' }
]
  
});

const User = mongoose.model("User", bookSchema);

module.exports = User;