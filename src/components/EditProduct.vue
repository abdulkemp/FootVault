<template>
  <div>
    <!-- Edit Product -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#exampleModal${item.id}`"
    >
      Edit Product
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      :id="`exampleModal${item.id}`"
      :key="item.id"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
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
                v-model="item.prodName"
                required
                placeholder="Product Name"
              />
              <label for="">Price</label>
              <input
                type="text"
                v-model="item.prodPrice"
                required
                placeholder="R"
              />
              <label for="">Category</label>
              <input
                type="text"
                v-model="item.prodCate"
                required
                placeholder="Name"
              />
              <label for="">Quantity</label>
              <input
                type="number"
                v-model="item.quantity"
                required
                placeholder="0"
              />
              <label for="">Image</label>
              <input
                type="text"
                v-model="item.image"
                required
                placeholder="http://"
              />
              <label for="">Description</label>
              <input
                type="text"
                v-model="item.prodDesc"
                required
                placeholder="Product Description"
              />
              <button
                class="btn btn-success mt-3"
                type="submit"
                @click="this.$store.dispatch('updateProduct', item)"
              >
                Edit Product
              </button>
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
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
