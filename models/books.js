import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var book = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  author: { type: String },
  illustrator: { type: String },
  size: { type: Object },
  pages: { type: Number },
  ageIndication: { type: Object },
  genre: [{ type: Object }],
  themes: [{ type: Object }],
  price: { type: Number },
  ISBN: { type: Object },
}, { timestamps: true });

mongoose.models = {};

var Book = mongoose.model('Book', book);

export default Book;