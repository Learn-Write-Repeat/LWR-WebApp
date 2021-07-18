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
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    thumbnail: req.body.thumbnail,
  });
  blog
    .save()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (err) {
      console.log(err);
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
