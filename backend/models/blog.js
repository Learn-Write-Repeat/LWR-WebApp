const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    body: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
