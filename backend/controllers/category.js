const { default: slugify } = require("slugify");
const Category = require("../models/category");

exports.getAllCategories = (req, res) => {
  Category.find()
    .sort({ position: 1 })
    .then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.createCategory = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.position);
  const slug = slugify(req.body.name, {
    replacement: "-",
    lower: true,
    trim: true,
  });
  const category = new Category({
    name: req.body.name,
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
  var slug = "";
  if (req.body.name) {
    slug = slugify(req.body.name, {
      replacement: "-",
      lower: true,
      trim: true,
    });
    req.body["slug"] = slug;
  }
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
