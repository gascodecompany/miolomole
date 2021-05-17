import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var contact = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};

var Contact = mongoose.model('Contact', contact);

export default Contact;