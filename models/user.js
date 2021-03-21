import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, {timestamps: true});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;