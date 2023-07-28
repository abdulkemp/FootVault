const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product} = require('../model');
const user = new User();
const product = new Product();

// USERS ROUTES

route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

route.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
});

route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});

route.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
});

route.put('/user/:id', bodyParser.json(), (req, res) => {
    user.updateUser(req, res);
});

route.post('/register', bodyParser.json(), (req, res) => {
    user.createUser(req, res);
});

route.delete('/user/:id', (req, res) => {
    user.deleteUser(req, res);
});

// PRODUCTS ROUTES

route.get('/products', (req, res) => {
    product.fetchProducts(req, res);
});

route.get('/product/:id', (req, res) => {
    product.fetchProduct(req, res);
});

route.post('/product', bodyParser.json(), (req, res) => {
    product.addProduct(req, res);
});

route.put('/product/:id', bodyParser.json(), (req, res) => {
    product.updateProduct(req, res);
});

route.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
});

// CART ROUTES

route.get('/carts', (req, res) => {
    cart.fetchCart(req, res);
});

route.get('/cart/:id', (req, res) => {
    cart.fetchCart(req, res);
});

route.post('/cart', bodyParser.json(), (req, res) => {
    cart.addCart(req, res);
});

route.put('/cart/:id', bodyParser.json(), (req, res) => {
    cart.updateCart(req, res);
});

route.delete('/cart/:id', (req, res) => {
    cart.deleteCart(req, res);
});

module.exports = route;