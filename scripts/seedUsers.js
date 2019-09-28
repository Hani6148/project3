const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eventBook"
);


// event: { type: Schema.Types.ObjectId, ref: 'Event'},
// sender:  { type: Schema.Types.ObjectId, ref: 'User' },
// receiver:  { type: Schema.Types.ObjectId, ref: 'User' },
// created:{ type: Date, default: Date.now },
// invitationstatus:{ type: String, required: true },

// username: { type: String, required: true },
// firstname: { type: String, required: true },
// lastname: { type: String, required: true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// eventsHosted: [
//     { type: Schema.Types.ObjectId, ref: 'Event' }
// ],
// eventsParticipation: [
//   { type: Schema.Types.ObjectId, ref: 'Event' }
// ]


const userSeed =[{

username: "ploy",
firstname: "phil",
lastname: "loy",
email: "ploy3_98@yahoo.com",
password: "password",
 

},
{
  username: "dd1",
  firstname: "dawid",
  lastname: "dudek",
  email: "dd@yahoo.com",
  password: "password",
   
  
  }
]

db.User.insertMany(userSeed)
  .then(data => {
    console.log( " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
