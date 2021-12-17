const MySQL = require('../database/mysql');
const db = new MySQL();
const moment = require('moment');
const table = 'users';
const myJson = require('../resources/users.json');

const getUsers = (req, res) => {
    const query = `SELECT id, name, email, created_at, updated_at FROM ${table}`;
    
    db.query(query, (err, rows) => {
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

const getMyJson = (req, res) => {
    res.send(myJson);
}

const getUser = (req, res) => {
    let id = req.params.id;
    let query = `
        SELECT id, name, email, created_at, updated_at
        FROM ${table} 
        WHERE id = ${id}
    `;
    
    db.query(query, (err, rows) => {
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
    let today = moment().format("YYYY-MM-DD hh:mm:ss");
    let query = `
        UPDATE ${table}
        SET name = '${body.name}', email = '${body.email}', updated_at = '${today}' 
        WHERE id = ${id}
    `;
    
    db.query(query, (err, rows) => {
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
    let query = `
        INSERT INTO ${table} (name, email)
        VALUES ('${body.name}', '${body.email}')
    `;
    
    db.query(query, (err, rows) => {
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
    let query = `DELETE FROM ${table} WHERE id = ${id}`;
    
    db.query(query, (err, rows) => {
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
    deleteUser,
    getMyJson
}