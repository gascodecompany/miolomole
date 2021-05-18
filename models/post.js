import mongoose, { Schema } from 'mongoose';

var post = new Schema({
  title: { type: String, required: true },
  jumbotron: { type: String },
  nodes: { type: String },
}, { timestamps: true });

mongoose.models = {};

var Post = mongoose.model('Post', post);

export default Post;