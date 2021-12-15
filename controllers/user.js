const MySQL = require('../database/mysql');
const mysql = new MySQL();

const getUsers = (req, res) => {
    const query = `SELECT * FROM users`;
    
    mysql.query(query, (err, rows) => {
        if (err) {
            console.log('[MySQL] Error: ', err);
            return res.status(500).json({
                error: err
            });
        } else {
            return res.json({
                users: rows.length ? rows : 'No users found',
            });
        }
    });
}

const getUser = (req, res) => {
    let id = req.params.id;
    let query = `SELECT * FROM users WHERE id = ${id}`;
    
    mysql.query(query, (err, rows) => {
        if (err) {
            console.log('[MySQL] Error: ', err);
            return res.status(500).json({
                error: err
            });
        } else {
            return res.json({
                user: rows[0] ? rows[0] : 'User not found'
            });
        }
    });
}

const updateUser = (req, res) => {
    let body = req.body;    
    let id = req.params.id;
    let query = `UPDATE users SET name = '${body.name}', email = '${body.email}' WHERE id = ${id}`;
    
    mysql.query(query, (err, rows) => {
        if (err) {
            console.log('[MySQL] Error: ', err);
            return res.status(500).json({
                error: err
            });
        } else {    
            return res.json({
                message: 'user updated successfully!',
            });
        }
    });
}

const createUser = (req, res) => {
    let body = req.body;
    let query = `INSERT INTO users (name, email) VALUES ('${body.name}', '${body.email}')`;
    
    mysql.query(query, (err, rows) => {
        if (err) {
            console.log('[MySQL] Error: ', err);
            return res.status(500).json({
                error: err
            });
        } else {
            return res.json({
                message: 'user created successfully!',
            });
        }
    });
}

const deleteUser = (req, res) => {
    let id = req.params.id;
    let query = `DELETE FROM users WHERE id = ${id}`;
    
    mysql.query(query, (err, rows) => {
        if (err) {
            console.log('[MySQL] Error: ', err);
            return res.status(500).json({
                error: err
            });
        } else {
            return res.json({
                message: 'user deleted successfully!',
            });
        }
    });
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser
}