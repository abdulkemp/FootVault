<template>
  <div>
    <div class="body">
      <div class="loginbox p-2 animate__animated animate__fadeIn">
        <h1 class="my-4 head">Login</h1>

        <form @submit.prevent="login" method="POST" class="mx-3 my-3">
          <div>
            <p>Email</p>
            <input
              type="email"
              v-model="emailAdd"
              name="emailAdd"
              id="email"
              class="my-2"
              placeholder="Enter Email"
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              v-model="password"
              name="password"
              id="password"
              class="my-2"
              placeholder="Enter Password"
              required
            />
          </div>
          <div>
            <button class="btn btn-light log" id="log" v-on:click="toggle">
              <span id="logs">Login </span
              ><i class="fa fa-spinner fa-spin" id="icon"></i>
            </button>
          </div>

          <router-link to="/register"
            ><a href="">Don't have an account?</a></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        async login (){
            const payload = {
                emailAdd: this.emailAdd,
                password: this.password,
            };
            await this.$store.dispatch("login", payload)
        }
    }
};
</script>

<style scoped></style>
