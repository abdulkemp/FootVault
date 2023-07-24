<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Offcanvas navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          style="background-color: #fde4c3;"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style="background-color: #302a18; color: #fde4c3;"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link active" aria-current="page" href="">
                  <router-link to="/">Login/Register</router-link>
                </a>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link" href="">
                  <router-link to="/home">Home</router-link>
                </a>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link" href="">
                  <router-link to="/admin">Admin</router-link>
                </a>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul li a{
  color: #fde4c3;
}
</style>
