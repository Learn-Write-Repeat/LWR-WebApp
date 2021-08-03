var express = require("express");
var router = express.Router();

const {
  getAllCategories,
  createCategory,
  getCategoryById,
  // getCategoryBySlug,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.get("/categories", getAllCategories);
router.post("/categories", createCategory);
router.get("/categories/:id", getCategoryById);
// router.get("/categoryslug", getCategoryBySlug);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
