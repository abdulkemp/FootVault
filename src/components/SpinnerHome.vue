<template>
  <div class="back">
    <!-- <NavBar /> -->
    <div class="top">
      <div class="block"></div>
    </div>
    <div class="prod container">
      <div class="row new">
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-4 mt-5 col-card">
          <div class="card">
            <div class="ima"></div>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.card {
  width: 20rem;
  height: 27rem;
  background: linear-gradient(100deg, #1c1c1c, #403820, #1c1c1c, #403820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
  border: 1px solid black;
}

@keyframes lining {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.back {
  background: linear-gradient(100deg, #1c1c1c, #302a18, #1c1c1c, #302a18);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}

.top {
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 0.7rem;
  background: linear-gradient(100deg, #1c1c1c, #3f3820, #1c1c1c, #3f3820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}

.block {
  width: 3.4rem;
  height: 2.6rem;
  border-radius: 5px 5px 5px 5px;
  background: linear-gradient(100deg, #1c1c1c, #403820, #1c1c1c, #403820);
  background-size: 400% 400% !important;
  animation: lining 2s ease infinite;
}

.col-card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
