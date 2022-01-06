const SubCategory = require("../../models/subcategory.model");

module.exports = {
    addSubCategory: (req, res) => {
        SubCategory.addSubCategory(req.body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "Sub Category not added! Please try again"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Sub Category added successfully!",
                data: results
            });
        })
    },

    getAllSubCategory: (req, res) => {
        SubCategory.getAllSubCategory((error, results) => {
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

    getSubCategoryById: (req,res) => {
        SubCategory.getSubCategoryById(req.params.id, (error,results) => {
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

    deleteSubCategoryById: (req,res) => {
        SubCategory.deleteSubCategoryById(req.params.id, (error,results) => {
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