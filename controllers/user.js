
const { response } = require('express');

const userGet = (req, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const userPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - controller'
    });
}




module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}
