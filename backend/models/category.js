const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog_categorySchema = new Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: Number,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", blog_categorySchema);

module.exports = Category;
