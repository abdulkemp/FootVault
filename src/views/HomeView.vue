<template>
  <div class="about">
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

<style scoped>


</style>