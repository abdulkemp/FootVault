import {
  createStore
} from "vuex";
import axios from "axios";
import {
  useCookies
} from "vue3-cookies";
import router from "@/router";
// const arraylists = document.querySelector(".array-lists");
const {
  cookies
} = useCookies();
const footvault = "https://footvaulttest.onrender.com/";
// import router from '../router/index'
export default createStore({
  state: {
    products: null,
    carts: null,
    users: null,
    user: null,
    product: null,
    cart: null,
    showSpinner: null,
    message: null,
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setCarts(state, value) {
      state.carts = value;
    },
    setCart(state, value) {
      state.cart = value;
    },
    setMessage(state, value) {
      state.products = value;
    },
    setUser(state, user) {
      state.user = user;
    },
    setSpinner(state, value) {
      state.products = value;
    },
    // post(state, value) {
    //   state.addProduct = value;
    // },
  },
  actions: {
    async fetchProducts(context) {
      const res = await axios.get(`${footvault}products`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit(err);
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${footvault}product/${id}`);
      const {
        results
      } = await res.data;
      context.commit("setProduct", results[0]);
      console.log(results);
    },
    async fetchUsers(context) {
      const res = await axios.get(`${footvault}users`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit(err);
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${footvault}user/${id}`);
      const {
        results
      } = await res.data;
      context.commit("setUser", results[0]);
      console.log(results);
    },
    async addProduct(context, payload) {
      console.log(payload);
      fetch(`https://footvaulttest.onrender.com/product`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteProduct(context, id, dispatch) {
      await fetch(`https://footvaulttest.onrender.com/product/` + id, {
        method: "DELETE",
      });
      const {
        msg,
        err
      } = await res.data;
      if (msg) {
        context.commit("setProduct", msg[0]);
        console.log(msg);
        dispatch('fetchProducts')
        location.reload();
      } else {
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      console.log(payload);
      fetch(`https://footvaulttest.onrender.com/register`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
        console.log("Registered");
        router.push({
          name: "home"
        });
    },
    async updateProduct(context, payload) {
      console.log(payload);
      fetch(`https://footvaulttest.onrender.com/product/` + payload.id, {
          method: "PUT",
          // mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((updateProduct) => updateProduct.json())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteUser(context, id, dispatch) {
      await fetch(`https://footvaulttest.onrender.com/user/` + id, {
        method: "DELETE",
      });
      const {
        msg,
        err
      } = await res.data;
      if (msg) {
        context.commit("setUser", msg[0]);
        console.log(msg);
        dispatch('fetchUsers')
        location.reload();
      } else {
        context.commit('setMessage', err);
      }
    },
    async updateUser(req, res, context, payload) {
      const data = req.body;
      fetch(`https://footvaulttest.onrender.com/user`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
      // if (data.password !== null || data.password !== undefined)
      //     data.password = hashSync(data.password, 15);

      // const updateQuery = `UPDATE Users SET ? WHERE userID = ?;`;

      db.query(updateQuery, [data, req.params.id], (err) => {
        if (err) throw err, console.log(err);
        res.status(200).json({
          msg: 'A row was affected.'
        });
      });
    },
    async login(context, payload) {
      console.log(payload)
      fetch(`https://footvaulttest.onrender.com/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.err === "You entered an incorrect password or not registered. Please try again") {
            alert("You have entered an incorrect Email or Password. Please try again.");
            document.location.reload();
          } else {
            console.log("Logged in");
            // context.commit("setMessage", msg);
            cookies.set("token", data.token)
            router.push({
              name: "home"
            });
          }
        });
    },
    checkAdmin(context) {
      // fetch("https://supremium2.onrender.com/user/" + user.userID);
      if (context.state.user != null) {
        if (context.state.user.role = "Admin") {
          context.state.admin = true;
        } else {
          context.state.admin = false;
        }
      }
    },

    // Cart
    async updateCart(context, payload) {
      console.log(payload);
      fetch(`https://footvaulttest.onrender.com/cart/` + payload.idCart, {
          method: "PUT",
          // mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((updateCart) => updateCart.json())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addCart(context, payload) {
      console.log(payload);
      fetch(`https://footvaulttest.onrender.com/cart`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteCart(context, id, dispatch) {
      await fetch(`https://footvaulttest.onrender.com/cart/` + id, {
        method: "DELETE",
      });
      const {
        msg,
        err
      } = await res.data;
      if (msg) {
        context.commit("setCart", msg[0]);
        console.log(msg);
        dispatch('fetchCarts')
        location.reload();
      } else {
        context.commit('setMessage', err);
      }
    },
    async fetchCarts(context) {
      const res = await axios.get(`${footvault}carts`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setCarts", results);
      } else {
        context.commit(err);
      }
    },
    async fetchCart(context, id) {
      const res = await axios.get(`${footvault}cart/${id}`);
      const {
        results
      } = await res.data;
      context.commit("setCart", results[0]);
      console.log(results);
    },
  },

  modules: {},
});