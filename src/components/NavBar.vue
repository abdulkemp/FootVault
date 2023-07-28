<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><div class="img-logo"><router-link to="/home"><img src="https://i.postimg.cc/3rnwxrZ6/My-project-9.png" alt=""></router-link></div></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          
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
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link" href="">
                  <router-link to="/spinner">Spinner</router-link>
                </a>
              </li>
              <li class="nav-item" data-bs-dismiss="offcanvas">
                <a class="nav-link" href="">
                  <router-link to="/cart">Cart</router-link>
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
  color: black;
}

.img-logo{
  width: 7rem;
  height: 100%;
  animation: rotate360 5s infinite linear;
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.img-logo img{
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
