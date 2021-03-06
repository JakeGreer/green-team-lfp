const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: { type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true},
  dateAdded: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
