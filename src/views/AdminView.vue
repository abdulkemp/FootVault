<template>
  <div v-if="users">
    <NavBar />
    <div class="admin">
      <h1>Users</h1>
      <div class="admin-user">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><div class="header">#</div></th>
              <th scope="col"><div class="header">Firstname</div></th>
              <th scope="col"><div class="header">Lastname</div></th>
              <th scope="col"><div class="header">Email Address</div></th>
              <!-- <th scope="col"><div class="header">Password</div></th> -->
              <th scope="col"><div class="header">Profile Image</div></th>
              <th scope="col"><div class="header">User Role</div></th>
              <th scope="col"><div class="header">Edit / Delete</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.userID">
              <td>
                <div class="row-col id">{{ item.userID }}</div>
              </td>
              <td>
                <div class="row-col">{{ item.firstName }}</div>
              </td>
              <td>
                <div class="row-col">{{ item.lastName }}</div>
              </td>
              <td>
                <div class="row-col">{{ item.emailAdd }}</div>
              </td>
              <!-- <td><div class="pass"> {{ item.password }} </div></td> -->
              <td>
                <div class="img-col">
                <div class="td-img"><img :src="item.imgPro" alt="" /></div>
              </div>
              </td>
              <td>
                <div class="row-col">{{ item.role }}</div>
              </td>
              <td>
                <div class="edit-delete">
                  <button class="btn btn-primary">Edit</button
                  ><button class="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="products">
      <h1>Products</h1>
      <div class="product-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"><div class="header">#</div></th>
              <th scope="col"><div class="header">Product Name</div></th>
              <th scope="col"><div class="header">Category</div></th>
              <th scope="col"><div class="header">Price</div></th>
              <!-- <th scope="col"><div class="header">Password</div></th> -->
              <th scope="col"><div class="header">Quantity</div></th>
              <th scope="col"><div class="header">Product Image</div></th>
              <th scope="col"><div class="header">Ship Price</div></th>
              <th scope="col"><div class="header">Edit / Delete</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prod in products" :key="prod.id">
              <td>
                <div class="row-col id">{{ prod.id }}</div>
              </td>
              <td>
                <div class="row-col">{{ prod.prodName }}</div>
              </td>
              <td>
                <div class="row-col">{{ prod.prodCate }}</div>
              </td>
              <td>
                <div class="row-col">R {{ prod.prodPrice }}</div>
              </td>
              <td><div class="row-col"> {{ prod.quantity }} </div></td>
              <td>
                <div class="img-col">
                <div class="td-img"><img :src="prod.image" alt="" /></div>
              </div>
              </td>
              <td>
                <div class="row-col">R {{ prod.shipPrice }}</div>
              </td>
              <td>
                <div class="edit-delete">
                  <button class="btn btn-primary">Edit</button
                  ><button class="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      users: this.$store.state.users,
      products: this.$store.state.products,
    };
  },
  created() {
    this.fetchUsers();
    this.fetchProducts();
  },
  methods: {
    async fetchUsers() {
      const res = await axios.get(`https://footvaulttest.onrender.com/users`);
      this.users = res.data.results;
      console.log(res);
    },
    async fetchProducts() {
      const res = await axios.get(`https://footvaulttest.onrender.com/products`);
      this.products = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style scoped>
.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.admin h1 {
  text-decoration: underline;
}
.products h1 {
  text-decoration: underline;
}

.admin-user {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-table {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
td {
  height: 1rem;
  width: 8rem;
}

.td-img {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

td .img-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.td-img img {
  width: 100%;
  height: 100%;
}


.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table {
  width: 90%;
}

.edit-delete{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
}

.edit-delete .btn{
  width: 5rem;
  margin: 3px;
  text-align: center;
}

.row-col{
  width: 100%;
  border: 100%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.id{
  display: flex;
  justify-content: center;
  align-items: center;
}
td .row-col{
  width: 100%;
  height: 100%;
}
</style>
