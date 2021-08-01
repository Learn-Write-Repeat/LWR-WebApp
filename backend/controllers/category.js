const { default: slugify } = require("slugify");
const Category = require("../models/category");

exports.getAllCategories = (req, res) => {
  Category.find()
    .sort({ createdAt: -1 })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.createCategory = (req, res) => {
  console.log(req.body.category);
  console.log(req.body.position);
  const slug = slugify(req.body.category, {
    replacement: "-",
    lower: true,
    trim: true,
  });
  const category = new Category({
    name: req.body.category,
    position: req.body.position,
    slug: slug,
  });
  category
    .save()
    .then(function (result) {
      console.log(result);
      res.send(result);
    })
    .catch(function (err) {
      console.log(err);
      res.json({ error: "Category name must be unique" });
    });
};

exports.getCategoryById = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.getCategoryBySlug = (req, res) => {
  const slug = req.query.slug;
  Category.findOne({ slug: slug })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndRemove(id, { useFindAndModify: false })
    .then(function (result) {
      res.json("Deleted");
    })
    .catch(function (err) {
      console.log(err);
    });
};
