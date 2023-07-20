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
    users: null,
    user: null,
    product: null,
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
    setUsers(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setMessage(state, value) {
      state.products = value;
    },
    setUser(state, value) {
      state.products = value;
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteProduct(context, id, dispatch) {
      const res = await axios.get(`${footvault}product/${id}`);
      console.log(res);
      const {
        msg,
        err
      } = await res.data;
      if (msg) {
        context.commit("setProduct", msg[0]);
        console.log(msg);
        dispatch('fetchProducts')
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
          name: "about"
        });
    },
    async updateProduct(context, payload) {
      console.log(payload);
      let res = await axios.put(`${footvault}products/${payload.id}`, payload);
      console.log(res.data);
      let msg = await res.data.msg;
      if (msg) {
        context.commit('setMessage', msg)
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
              name: "about"
            });
          }
        });
      // const { jwToken, result, msg, err } = await res.data;
      // if (result) {
      //   context.commit('setUser', result);
      //   context.commit('setMessage', msg);
      //   console.log("logged in");
      //   // context.commit('setSpinner', false);
      //   cookies.set("LegitUser", jwToken);
      //   // router.push("/");
      // } else {
      //   context.commit("setMessage", err);
      // }
    },
  },

  modules: {},
});