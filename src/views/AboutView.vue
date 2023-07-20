<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NavBar />
    <Products />
  </div>
</template>

<script>
import Products from '../components/Products.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    Products,
    NavBar
  }
}
</script>