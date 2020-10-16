<template>
  <div class="home">
    <navbar />
    <section class="heading">
      <header>
        <div
          class="jumbotron jumbotron-fluid text-center"
          style="background-image: url(images/img-header.jpg)"
        >
          <div class="container">
            <h1>
              Platform Digital <br />
              Hukum Indonesia
            </h1>
            <p class="mt-3">
              Pengembangan dan Pelayanan
              <br />
              SDM Profesional Lawyers Indonesia
            </p>
            <a href="#" class="btn btn-get-started px-4 mt-4"> Get Started </a>
          </div>
        </div>
      </header>
    </section>
    <div class="container">
      <section
        class="section-stats row justify-content-center text-center"
        id="stats"
      >
        <div class="col-4 col-md-2 stats-detail">
          <h2>12</h2>
          <p>Diskusi</p>
        </div>
        <div class="col-4 col-md-2 stats-detail">
          <h2>12</h2>
          <p>Artikel</p>
        </div>
        <div class="col-4 col-md-2 stats-detail">
          <h2>3</h2>
          <p>Kelas</p>
        </div>
      </section>
    </div>
    <section class="section-popular" id="popular">
      <div class="container">
        <div class="row">
          <div class="col text-center section-popular-heading">
            <h2>Publik Diskusi</h2>
            <p>
              Diskusi dengan Para Lawyers 4.0
              <br />
              Fitur Untuk Belajar dan Berproses Bersama
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-popular-content" id="popularContent">
      <div class="container">
        <div
          class="section-popular-travel row justify-content-center text-left"
        >
          <div class="col-sm-6 col-md-3">
            <div class="card card-travel text-center d-flex flex-column">
              <img
                src="images/kelas-populer.jpeg"
                alt="Forum Diskusi"
                class="img-fluid"
              />
              <div class="card-body">
                <h5>Diskusi Hukum Tata Negara</h5>
                <p>Oleh : Steven Wiliams</p>
                <div class="travel-button mt-auto">
                  <router-link
                    :to="{ name: 'detail-diskusi' }"
                    class="btn btn-travel-details px-4"
                    >View Detail</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-travel text-center d-flex flex-column">
              <img
                src="images/kelas-populer2.jpeg"
                alt="Forum Diskusi"
                class="img-fluid"
              />
              <div class="card-body">
                <h5>Diskusi Mahasiswa Aktivis Atau Akademis</h5>
                <p>Oleh : David Beckham</p>
                <div class="travel-button mt-auto">
                  <router-link
                    :to="{ name: 'detail-diskusi' }"
                    class="btn btn-travel-details px-4"
                    >View Detail</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-travel text-center d-flex flex-column">
              <img
                src="images/kelas-populer3.jpeg"
                alt="Forum Diskusi"
                class="img-fluid"
              />
              <div class="card-body">
                <h5>
                  Diskusi Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, repellendus.
                </h5>
                <p>Oleh : David Beckham</p>
                <div class="travel-button mt-auto">
                  <router-link
                    :to="{ name: 'detail-diskusi' }"
                    class="btn btn-travel-details px-4"
                    >View Detail</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card card-travel text-center d-flex flex-column">
              <img
                src="images/pmii.jpg"
                alt="Forum Diskusi"
                class="img-fluid"
              />
              <div class="card-body">
                <h5>
                  PMII Rayon Fakultas Hukum Mempersembahkan WEBINAR NASIONAL :
                  “MENGAPA KITA...
                </h5>
                <p class="text-center">Oleh : Paturahman</p>
                <div class="travel-button mt-auto text-center">
                  <router-link
                    :to="{ name: 'detail-diskusi' }"
                    class="btn btn-travel-details px-4"
                    >View Detail</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="artikel-info">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <h3>Bangun Portfolio</h3>
            <h6>
              Unggah hasil bacaan mu disini dan dilihat oleh banyak orang
              <br />
              <a href="#" class="btn btn-get-started px-4 mt-3">
                Mulai Menulis
              </a>
            </h6>
          </div>
          <div class="col-md-4 text-center">
            <img
              src="images/portfolio.png"
              alt="img-portfolio"
              class="img-fluid w-50"
            />
          </div>
          <div class="col-md-4 d-none">
            <h3>Buat Forum Diskusi Mudah</h3>
            <h6>
              Ajak Banyak Orang dan Cari Jawaban Bersama
              <br />
            </h6>
          </div>
        </div>
      </div>
    </section>
    <section class="section-testimonials-heading" id="testimonialsHeading">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Tulisan Member Lawtech</h2>
            <p>
              Temukan artikel menarik
              <br />
              ikuti perkembangan hukum terkini
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-testimonials-content" id="testimonialsContent">
      <div class="container">
        <div
          class="section-popular-travel row justify-content-center match-height"
        >
          <div class="col-sm-6 col-md-6 col-lg-4">
            <a href="artikel-detail.html">
              <div class="card card-testimonial">
                <div class="testimonial-content">
                  <div class="thumbnail-artikel">
                    <img
                      src="https://images.unsplash.com/photo-1597004615103-f480ee1d6f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="img artikel"
                      class="img-fluid w-100 image"
                    />
                    <div class="middle">
                      <div class="text">Melanjutkan Bacaan</div>
                    </div>
                  </div>
                  <div class="card-body">
                    <p class="testimonials">
                      " JENIS PELANGGARAN LALULINTAS YANG PALING SERING DI
                      TEMUKAN, KAMU HARUS HINDARI INI "
                    </p>
                    <span>HUKUM PIDANA</span>
                    <hr />
                    <img
                      src="images/Patur.jpg"
                      alt="profile user"
                      class="img-fluid rounded-circle float-left img-profile"
                    />
                    <p class="penulis mt-2">
                      Paturahman Fikri <br />
                      22 juni 2020 <br />
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <a href="artikel-detail.html">
              <div class="card card-testimonial">
                <div class="testimonial-content">
                  <img
                    src="https://images.unsplash.com/photo-1474311063486-1a54b6319023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="img artikel"
                    class="img-fluid w-100"
                  />
                  <div class="card-body">
                    <p class="testimonials">
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae esse facilis iure. "
                    </p>
                    <span>HUKUM PIDANA</span>
                    <hr />
                    <img
                      src="images/forum1.png"
                      alt="profile user"
                      class="img-fluid rounded-circle float-left img-profile"
                    />
                    <p class="penulis mt-2">
                      gerrad <br />
                      22 juni 2020 <br />
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <a href="artikel-detail.html">
              <div class="card card-testimonial">
                <div class="testimonial-content">
                  <img
                    src="https://images.unsplash.com/photo-1519071001089-ea7232d283f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="img artikel"
                    class="img-fluid w-100"
                  />
                  <div class="card-body">
                    <p class="testimonials">
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae esse facilis iure. "
                    </p>
                    <span>HUKUM PIDANA</span>
                    <hr />
                    <img
                      src="images/pp.JPG"
                      alt="profile user"
                      class="img-fluid rounded-circle float-left img-profile"
                    />
                    <p class="penulis mt-2">
                      Gusti Maulana <br />
                      22 juni 2020 <br />
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <a href="#" class="btn btn-need-help px-4 mt-4 mx-1">
              I Need Help
            </a>
            <a href="#" class="btn btn-get-started px-4 mt-4 mx-1">
              Lebih Banyak
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  name: "Home",
  components: {
    navbar,
  },
};
</script>

<style>
</style>