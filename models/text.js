import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var text = new Schema({
  text: { type: String, required: true },
  editedBy: { type: String, required: true },
}, {timestamps: true});

mongoose.models = {};

var Text = mongoose.model('Text', text);

export default Text;