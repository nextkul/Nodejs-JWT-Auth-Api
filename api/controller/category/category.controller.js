const Category = require("../../models/category.model");

module.exports = {
    addCategory: (req, res) => {
        Category.addCategory(req.body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "Category not added! Please try again"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Category added successfully!",
                data: results
            });
        })
    },

    getAllCategory: (req, res) => {
        Category.getAllCategory((error, results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "No record found"
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
 
    getCategoryById: (req,res) => {
        Category.getCategoryById(req.params.id, (error,results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "No record found"
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    deleteCategoryById: (req,res) => {
        Category.deleteCategoryById(req.params.id, (error,results) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "No record found"
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    }
}