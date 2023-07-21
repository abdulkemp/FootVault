<template>
  <div v-if="users">
    <NavBar />
    <div class="admin">
      <h1>Admin</h1>
      <div class="admin-user">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Password</th>
              <th scope="col">Profile Image</th>
              <th scope="col">User Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.userID">
              <th scope="row">{{ item.userID }}</th>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.emailAdd }}</td>
              <td>{{ item.password }}</td>
              <td><div class="td-img"><img :src="item.imgPro" alt="" /></div></td>
              <td>{{ item.userRole }}</td>
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
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const res = await axios.get(
        `https://footvaulttest.onrender.com/users`
      );
      this.users = res.data.results;
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

.admin h1 {
  text-decoration: underline;
}

.admin-user {
  width: 100%;
  height: 100%;
  padding: 3rem;
}
td{
  height: 3rem;
  /* width: 5rem; */
  border: 2px solid black;
}

.td-img{
  width: 100%;
  height: 100%;
}
.td-img img{
  width: 100%;
  height: 100%;
}
</style>
