const { default: slugify } = require("slugify");
const Blog = require("../models/blog");

exports.getAllBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.createBlog = (req, res) => {
  const slug = slugify(req.body.title, {
    replacement: "-",
    lower: true,
    trim: true,
  });
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    thumbnail: req.body.thumbnail,
    slug: slug,
  });
  blog
    .save()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      //   console.log(err);
      res.json({ error: "Blog Title must be unique" });
    });
};

exports.getBlogById = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.getBlogBySlug = (req, res) => {
  const slug = req.query.slug;
  Blog.findOne({ slug: slug })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.updateBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndRemove(id, { useFindAndModify: false })
    .then(function (result) {
      res.json("Deleted");
    })
    .catch(function (err) {
      console.log(err);
    });
};
