<template>
  <div>
    <div class="add">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Product
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" @submit="addProduct">
              <div class="heading">
                <h1>Add New Product</h1>
              </div>
              <div class="add-body">
                <label for="">Product Name</label>
                <input
                  type="text"
                  v-model="prodName"
                  required
                  placeholder="Product Name"
                />
                <label for="">Price</label>
                <input
                  type="text"
                  v-model="prodPrice"
                  required
                  placeholder="R"
                />
                <label for="">Category</label>
                <input
                  type="text"
                  v-model="prodCate"
                  required
                  placeholder="Name"
                />
                <label for="">Quantity</label>
                <input
                  type="number"
                  v-model="quantity"
                  required
                  placeholder="0"
                />
                <label for="">Image</label>
                <input
                  type="text"
                  v-model="image"
                  required
                  placeholder="http://"
                />
                <label for="">Description</label>
                <input
                  type="text"
                  v-model="prodDesc"
                  required
                  placeholder="Product Description"
                />
                <button
                  class="btn btn-success mt-3"
                  type="submit"
                  @click="($event) => addProduct()"
                >
                  Add Product
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      prodName: "",
      prodPrice: "",
      prodCate: "",
      quantity: "",
      image: "",
      prodDesc: "",
    };
  },
  methods: {
    addProduct() {
      const payload = {
        prodName: this.prodName,
        prodPrice: this.prodPrice,
        prodCate: this.prodCate,
        quantity: this.quantity,
        image: this.image,
        prodDesc: this.prodDesc,
      };
      this.$store.dispatch("addProduct", payload);
    },
  },
};
</script>

<style scoped></style>
