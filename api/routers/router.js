const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("../controller/users/user.controller");
const Category = require("../controller/category/category.controller")
const SubCategory = require("../controller/category/subcategory.controller")

router.get("/users/", checkToken, getUsers);
router.post("/users/register", checkToken, createUser);
router.get("/users/:id", checkToken, getUserByUserId);
router.post("/users/login", login);
router.patch("/users/", checkToken, updateUsers);
router.delete("/users/", checkToken, deleteUser);

// Category

router.post("/category/add", checkToken, Category.addCategory)
router.get("/categories", checkToken, Category.getAllCategory)
router.get("/category/edit/:id", checkToken, Category.getCategoryById)
router.get("/category/delete/:id", checkToken, Category.deleteCategoryById)

router.post("/sub-category/add", checkToken, SubCategory.addSubCategory)
router.get("/sub-categories", checkToken, SubCategory.getAllSubCategory)
router.get("/sub-category/edit/:id", checkToken, SubCategory.getSubCategoryById)
router.get("/sub-category/delete/:id", checkToken, SubCategory.deleteSubCategoryById)

module.exports = router; 
 