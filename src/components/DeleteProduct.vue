<template>
  <div>
    <!-- Delete Product -->
    <button
      type="button"
      class="btn btn-danger"
      data-bs-toggle="modal"
      :data-bs-target="`#deleteModal${item.id}`"
    >
      Delete Product
    </button>
    <div
      class="modal fade"
      :id="`deleteModal${item.id}`"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
      v-for="item in items"
      :key="item.id"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="deleteModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" @submit="deleteProduct()">
            <h1>Are you sure that you want to delete {{ item.prodName }} ?</h1>
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
              class="btn btn-primary"
              @click="deleteProduct(item.id)"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
      return console.log("Product was deleted");
    },
  },
};
</script>

<style scoped></style>
