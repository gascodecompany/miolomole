import mongoose from 'mongoose';
import Book from './book';
var Schema = mongoose.Schema;

var partner = new Schema({
  name: { type: String, unique: true, required: true },
  logo: { type: String, required: true },
  description: { type: String, required: true },
  city: [{ type: Object }],
  books: [{ type: Schema.Types.ObjectId, ref: Book }],
}, { timestamps: true });

mongoose.models = {};

var Partner = mongoose.model('Partner', partner);

export default Partner;