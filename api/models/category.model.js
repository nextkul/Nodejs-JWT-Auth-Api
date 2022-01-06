const dbConn = require("./../../config/database");

module.exports = {
    addCategory: (data, callback) => {
        console.log(data);
        let sql = `INSERT INTO category SET ?`;
        dbConn.query(sql, { name: data.categoryName }, (error, results) => {
            if (error) throw error;
            return callback(null, results);
        })
    },

    getAllCategory: (callback) => {
        let sql = `SELECT * FROM category`;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results);
        })
    },

    getCategoryById: (id, callback) => {
        let sql = `SELECT * FROM category WHERE id = ` + id;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results[0]);
        })
    },

    deleteCategoryById: (id, callback) => {
        let sql = `DELETE FROM category WHERE id = ` + id;
        dbConn.query(sql, (error, results) => {
            if (error) throw error;
            return callback(null, results[0]);
        });
    }
}