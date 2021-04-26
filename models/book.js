import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var book = new Schema({
  name: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  illustrators: [{ type: String }],
  size: { type: Object },
  pages: { type: Number },
  genre: [{ type: Object }],
  themes: [{ type: Object }],
  ISBN: { type: Object },
  ageIndication: { type: Object },
  synopsis: { type: String, required: true },
  authors: [{ type: String }],
  price: { type: Number },
  images: [{ type: String }]
}, { timestamps: true });

mongoose.models = {};

var Book = mongoose.model('Book', book);

export default Book;