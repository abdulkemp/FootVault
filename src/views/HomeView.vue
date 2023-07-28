<template>
  <div class="about" v-if="items">
    <NavBar />
    <div class="whole-head animate__animated animate__fadeIn">
      <div class="headline">
        <div class="left-head">
          <div class="left-top">
            <h1>FOOTVAULT</h1>
          </div>
          <div class="right-bottom">
            <p>INTRIGUE YOUR INSTEP</p>
          </div>
        </div>
        <div class="right-head">
          <div class="right-logo">
            <h1>F</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="selection">
      <div class="drops">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Gender
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">Mens</li>
          <li class="dropdown-item">Women</li>
        </ul>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Brand
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">Nike</li>
          <li class="dropdown-item">Adidas</li>
          <li class="dropdown-item">Puma</li>
          <li class="dropdown-item">Sketchers</li>
        </ul>
      </div>
    </div>
    <div class="prod container">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="item in items" :key="item.id">
          <div class="card">
            <div class="ima">
              <img
                :src="item.image"
                class="card-img-top"
                alt="..."
                style="height: 20rem; max-width: 30rem"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <button class="bt">Add to cart</button>

              <!-- <router-link class="bt1" :to="{name: 'single', params: {id: item.id}}" >
                 Show More...
                </router-link> -->
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
  <div v-else>
    <SpinnerHome />
  </div>
</template>

<script>
// import Products from "../components/Products.vue";
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import SpinnerHome from "@/components/SpinnerHome.vue";
export default {
  components: {
    // Products,
    NavBar,
    SpinnerHome,
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get(
        `https://footvaulttest.onrender.com/products`
      );
      this.items = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style scoped>

.selection{
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drops{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.drops button{
  width: 6rem;
}
.headline {
  width: 70%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #302a18;
  font-family: "K2D", sans-serif;
}

.whole-head {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
}

.left-head {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.right-head {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.left-top {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 5rem;
}

.left-top h1 {
  font-size: 3rem;
}
.right-bottom p {
  font-size: 1rem;
  font-weight: bolder;
}
.right-bottom {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 5rem;
}
.right-logo {
  width: 70%;
  height: 100%;
  border-radius: 50%;
  border: 8px solid goldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-logo h1 {
  font-size: 18rem;
}

.add-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.edit-product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 20rem;
  /* height: 10rem; */
  background-color: goldenrod;
}

.card:hover {
  transition: 0.5s;
  transition-duration: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
  overflow: hidden;
}

.card-title {
  text-align: center;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.bt {
  width: 7rem;
  float: left;
  background-color: black;
  border-radius: 5px;
  color: white;
}
</style>
