const db = require('../config');

const {
    hash,
    compare,
    hashSync
} = require('bcrypt');

const {
    createToken
} = require('../middleware/AuthenticatedUser.js');

class User {
    login(req, res) {
        const {
            emailAdd,
            password
        } = req.body;
        db.query(`select * FROM Users where emailAdd = '${emailAdd}';`, async (err, result) => {
            // const userLog = result
            if (err) console.log('err: ',err);
            if (!result?.length || result == null) {
                res.status(401).json({
                    err: 'You entered the wrong email address'
                })
            } else {
                console.log('result: ',result);
                await compare(password, result[0].password, (cErr, cResult) =>{
                    if (cErr) console.log('cErr', cErr);

                    const jwToken = createToken({
                        emailAdd,
                        password
                    });
                    if (cResult) {
                        res.status(200).json({
                            msg: 'Logged In',
                            jwToken,
                            result: result
                        })
                    } else {
                        res.json({
                            msg: 'Succesfully Logged in'
                        });
                    }
                });
            }
        })
    }
    fetchUsers(req, res) {
        const fetchAllUsersQuery = `select userID, firstName, lastName, emailAdd, password, imgPro, role FROM Users;`;

        db.query(fetchAllUsersQuery, (err, data) => {
            if (err) throw err;
            else res.status(200).json({
                results: data
            });
        });
    };
    fetchUser(req, res) {
        const fetchUserQuery = `select userID, firstName, lastName, emailAdd, password, imgPro, role FROM Users where userID = ?;`;

        db.query(fetchUserQuery, [req.params.id], (err, data) => {
            if (err) throw err;
            else res.status(200).json({
                results: data
            });
        });
    };
    async createUser(req, res) {
        let detail = req.body;

        detail.password = await hash(detail.password, 15);

        let user = {
            emailAdd: detail.emailAdd,
            password: detail.password,
            // confirm_psw: detail.confirm_psw
        }

        const strQry = `INSERT INTO Users SET ?;`;

        db.query(strQry, [detail], (err) => {
            if (err) {
                console.log(err)
                res.status(401).json({
                    err
                });
            } else {
                const jwToken = createToken(user);

                res.cookie('UserFoundInDatabase', jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({
                    msg: 'A user record was saved.'
                });
            };
        });
    };
    updateUser(req, res) {
        const data = req.body;
        if (data.password !== null || data.password !== undefined)
            data.password = hashSync(data.password, 15);

        const updateQuery = `UPDATE Users SET ? WHERE userID = ?;`;

        db.query(updateQuery, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'A row was affected.'
            });
        });
    };
    deleteUser(req, res) {
        const deleteQuery = `DELETE FROM Users WHERE userID = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'A record was removed from a database'
            });
        });
    };
};


class Product {
    fetchProducts(req, res) {
        const fetchAllProducts = `SELECT * FROM Products;`;

        db.query(fetchAllProducts, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchProduct(req, res) {
        const fetchProductQuery = `SELECT id, prodName, prodDesc, prodPrice, prodCate, quantity, image FROM Products WHERE id = ?;`;

        db.query(fetchProductQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addProduct(req, res) {
        const addProductQuery = `INSERT INTO Products SET ?;`;

        db.query(addProductQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Product saved'
                });
            };
        });
    };
    updateProduct(req, res) {
        const updateQuery = `UPDATE Products SET ? WHERE id = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Product updated'
                });
            };
        });
    }
    deleteProduct(req, res) {
        const deleteQuery = `DELETE FROM Products WHERE id = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A product was deleted'
            });
        });
    };
};

class Cart {
    fetchCarts(req, res) {
        const fetchAllCart = `SELECT * FROM Carts;`;

        db.query(fetchAllCart, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchCart(req, res) {
        const fetchCartQuery = `SELECT * FROM Carts WHERE idCart = ?;`;

        db.query(fetchCartQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addCart(req, res) {
        const addCartQuery = `INSERT INTO Carts SET ?;`;

        db.query(addCartQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Cart saved'
                });
            };
        });
    };
    updateCart(req, res) {
        const updateQuery = `UPDATE Carts SET ? WHERE idCart = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Cart updated'
                });
            };
        });
    }
    deleteCart(req, res) {
        const deleteQuery = `DELETE FROM Carts WHERE idCart = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A product was deleted'
            });
        });
    };
};



module.exports = {
    User,
    Product,
    Cart
};