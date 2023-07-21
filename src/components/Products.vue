<template>
  <div class="alles" v-if="items">
    <!-- <div class="line"></div> -->
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
    <Spinner />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
// import SingleProduct from "../components/SingleProduct.vue";
export default {
  name: "products",
  components: {
    Footer,
    // SingleProduct,
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

<style>
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
}

.card-title {
  text-align: center;
}
.line {
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
.col {
  justify-content: center;
  margin: 0;
  padding: 0;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.bt {
  width: 7rem;
  float: left;
  background-color: rgba(31, 31, 241, 0.733);
  border: 1px solid rgb(31, 31, 241);
  border-radius: 5px;
}
.bt1 {
  width: 7rem;
  float: right;
  color: black;
  text-decoration: none;
  background-color: rgba(31, 241, 49, 0.733);
  border: 1px solid rgb(31, 241, 49);
  border-radius: 5px;
  text-align: center;
}
.show {
  color: black;
}
.bt1:hover {
  background-color: green;
  border: 1px solid rgba(31, 241, 49, 0.733);
  color: white;
}
.bt:hover {
  background-color: rgba(27, 27, 141, 0.781);
  border: 1px solid rgba(31, 31, 241, 0.733);
  color: white;
}
</style>
