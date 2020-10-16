
<template>
  <div class="container">
    <nav class="row navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img src="images/Gusma-Law.png" alt="" />
      </a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navb"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navb">
        <ul class="navbar-nav ml-auto mr-3">
          <li class="nav-item mx-md-2">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item mx-md-2">
            <router-link :to="{ name: 'diskusi' }" class="nav-link"
              >Diskusi</router-link
            >
          </li>
          <li class="nav-item mx-md-2">
            <a class="nav-link" href="#">Kelas</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Artikel
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Hukum Perdata</a>
              <a class="dropdown-item" href="#">HTN</a>
              <a class="dropdown-item" href="#">Hukum Pidana</a>
            </div>
          </li>
        </ul>

        <!-- Mobile button -->
        <form class="form-inline d-sm-block d-md-none">
          <button class="btn btn-login my-2 my-sm-0">Masuk</button>
        </form>
        <!-- Desktop Button -->
        <form class="form-inline my-2 my-lg-0 d-none d-md-block">
          <button class="btn btn-login btn-navbar-right my-2 my-sm-0 px-4">
            Masuk
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>