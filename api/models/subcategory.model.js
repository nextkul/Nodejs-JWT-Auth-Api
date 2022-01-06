const dbConn = require("./../../config/database");

module.exports = {
    addSubCategory: (data, callback) => {
        console.log(data);
        let sql = `INSERT INTO sub_category SET ?`;
        dbConn.query(sql, {category_id:data.categoryId, name: data.subCategoryName }, (error, results) => {
            if (error) throw error;
            return callback(null, results);
        })
    },

    getAllSubCategory: (callback) => {
        let sql = `SELECT * FROM sub_category`;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results);
        })
    }, 

    getSubCategoryById: (id, callback) => {
        let sql = `SELECT * FROM sub_category WHERE id = ` + id;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results[0]);
        })
    },

    deleteSubCategoryById: (id, callback) => {
        let sql = `DELETE FROM sub_category WHERE id = ` + id;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results[0]);
        });
    }
}