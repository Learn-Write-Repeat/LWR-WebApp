var express = require("express");
var router = express.Router();

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

router.get("/blogs", getAllBlogs);
router.post("/blogs", createBlog);
router.get("/blogs/:id", getBlogById);
router.get("/blogslug", getBlogBySlug);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

module.exports = router;
