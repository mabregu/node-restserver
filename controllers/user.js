const getUsers = (req, res) => {
    res.json({
        message: 'GET request'
    });
}

const getUser = (req, res) => {
    const id = req.params.id;
    
    res.json({
        message: 'GET request',
        userId: id
    });
}

const updateUser = (req, res) => {
    const body = req.body;    
    const id = req.params.id;
    
    res.json({
        message: 'PUT request',
        userId: id,
        body
    });
}

const createUser = (req, res) => {
    const body = req.body;
    
    res.status(201).json({
        message: 'POST request',
        body
    });
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    
    res.json({
        message: 'DELETE request',
        userId: id
    });
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    createUser,
    deleteUser
}