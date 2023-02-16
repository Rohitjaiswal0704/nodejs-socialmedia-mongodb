const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  dob: String,
  gender: String,
  phone: String,
  city: String,
  about: String,
  avatar: {
    type: String,
    default: "dummy.png",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  forgetPasswordToken: 0,
});

userSchema.plugin(plm, { usernameField: "email" });


const User = mongoose.model("User", userSchema);

module.exports = User;


