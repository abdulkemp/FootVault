<template>
  <div v-if="users" class="admin-page">
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
              <th scope="col"><div class="header">Password</div></th>
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
              <td><div class="row-col pass"><p> {{ item.password }} </p></div></td>
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
                  <button
                    type="button"
                    class="btn btn-primary edit"
                    data-bs-toggle="modal"
                    :data-bs-target="`#exampleModal${item.userID}`"
                  >
                    Edit
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="`exampleModal${item.userID}`"
                    :key="item.userID"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Edit User
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body edit-body">
                          <div class="add-body" @submit.prevent="updateUser">
                            <label for="">User First-name</label>
                            <div class="align">
                              <input
                                type="text"
                                v-model="item.firstName"
                                required
                                placeholder="Firstname"
                              />
                            </div>
                            <label for="">User Last-name</label>
                            <div class="align">
                              <input
                                type="text"
                                v-model="item.lastName"
                                required
                                placeholder="Lastname"
                              />
                            </div>
                            <label for="">Email Address</label>
                            <div class="align">
                              <input
                                type="text"
                                v-model="item.emailAdd"
                                required
                                placeholder="@gmail/hotmail.com"
                              />
                            </div>
                            <!-- <label for=""></label>
                              <div class="align">
                              <input
                              type="number"
                              v-model="item.quantity"
                              required
                              placeholder="0"
                            /> </div> -->
                            <label for="">User Role</label>
                            <div class="align">
                              <input
                                type="text"
                                v-model="item.role"
                                required
                                placeholder="Admin/User"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            class="btn btn-success size"
                            type="submit"
                            @click="this.$store.dispatch('updateUser', item)"
                          >
                            Edit User
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger delete"
                    data-bs-toggle="modal"
                    :data-bs-target="`#userModal${item.userID}`"
                  >
                    Delete
                  </button>
                  <div
                    class="modal fade"
                    :id="`userModal${item.userID}`"
                    tabindex="-1"
                    aria-labelledby="userModalLabel"
                    aria-hidden="true"
                    :key="item.userID"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="userModalLabel">
                            Delete User
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body" @submit="deleteUser()">
                          <h1>
                            Are you sure that you want to delete
                            {{ item.firstName }} ?
                          </h1>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary size"
                            @click="deleteUser(item.userID)"
                          >
                            Delete User
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="line">
      <div class="inline"></div>
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
              <td>
                <div class="row-col">{{ prod.quantity }}</div>
              </td>
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
                  <button
                    type="button"
                    class="btn btn-primary edit"
                    data-bs-toggle="modal"
                    :data-bs-target="`#editModal${prod.id}`"
                  >
                    Edit
                  </button>
                  <div
                    class="modal fade"
                    :id="`editModal${prod.id}`"
                    :key="prod.id"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="editModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="editModalLabel">
                            Modal title
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="heading">
                            <h1>Edit Product</h1>
                          </div>
                          <div class="add-body" @submit.prevent="updateProduct">
                            <label for="">Product Name</label>
                            <input
                              type="text"
                              v-model="prod.prodName"
                              required
                              placeholder="Product Name"
                            />
                            <label for="">Price</label>
                            <input
                              type="text"
                              v-model="prod.prodPrice"
                              required
                              placeholder="R"
                            />
                            <label for="">Category</label>
                            <input
                              type="text"
                              v-model="prod.prodCate"
                              required
                              placeholder="Name"
                            />
                            <label for="">Quantity</label>
                            <input
                              type="number"
                              v-model="prod.quantity"
                              required
                              placeholder="0"
                            />
                            <label for="">Image</label>
                            <input
                              type="text"
                              v-model="prod.image"
                              required
                              placeholder="http://"
                            />
                            <label for="">Description</label>
                            <textarea
                              type="text"
                              v-model="prod.prodDesc"
                              required
                              placeholder="Product Description"
                            />
                            
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                              class="btn btn-success size"
                              type="submit"
                              @click="
                                this.$store.dispatch('updateProduct', prod)
                              "
                            >
                              Edit Product
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger delete"
                    data-bs-toggle="modal"
                    :data-bs-target="`#deleteModal${prod.id}`"
                  >
                    Delete
                  </button>
                  <div
                    class="modal fade"
                    :id="`deleteModal${prod.id}`"
                    tabindex="-1"
                    aria-labelledby="deleteModalLabel"
                    aria-hidden="true"
                    :key="prod.id"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="deleteModalLabel">
                            Delete Product
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body" @submit="deleteProduct()">
                          <h1>
                            Are you sure that you want to delete
                            {{ prod.prodName }} ?
                          </h1>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger size"
                            @click="deleteProduct(prod.id)"
                          >
                            Delete Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
      const res = await axios.get(
        `https://footvaulttest.onrender.com/products`
      );
      this.products = res.data.results;
      console.log(res);
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      alert("Product was deleted");
      location.reload();
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
      alert("User was deleted");
      location.reload();
    },
  },
};
</script>

<style scoped>
/* .admin-page{
  background-color: grey;
} */

td .pass p{
  /* width: 7rem !important;  */
  word-break: break-all;
  font-size: 11px;
}

.line {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.inline {
  border: 3px solid #fde4c3;
  width: 90%;
}
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
  margin-top: 2rem;
}
.product-table {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
td {
  height: 1rem;
  width: 8rem;
  background-color: transparent;
  border: none;
  color: #fde4c3;
}

th {
  background-color: transparent;
  border: none;
  color: #fde4c3;
}

.td-img {
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.td-img img:hover{
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
  transform: scale(2.5);
  transition-duration: 1s;
  overflow: hidden;
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

.edit-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
}

.edit-delete .btn {
  width: 5rem;
  margin: 3px;
  text-align: center;
  color: #fde4c3;
  background-color: transparent;
  border: none;
}

.delete:hover {
  background-color: red;
  border: 1px solid black;
}
.edit:hover {
  background-color: blue;
  border: 1px solid black;
}

.row-col {
  width: 100%;
  border: 100%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.id {
  display: flex;
  justify-content: center;
  align-items: center;
}
td .row-col {
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: #302a18;
}

.add-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.add-body input {
  width: 19rem;
  border-bottom: 2px solid black;
  background-color: rgba(128, 128, 128, 0.607);
  float: right;
}
.add-body textarea {
  width: 19rem;
  border-bottom: 2px solid black;
  background-color: rgba(128, 128, 128, 0.607);
  float: right;
}

.add-body label {
  font-size: 1.6rem;
  float: left;
  width: 100%;
}

.add-body input:hover {
  background-color: white;
}

.edit-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.size{
  width: 9rem !important;
}
.size:hover{
  transition-delay: 2s;
  border-bottom: 2px solid #fde4c3;
}

.admin-page{
  text-align: center;
}
</style>
