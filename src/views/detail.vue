<template>
  <div class="detail">
    <navbar />
    <header>
      <div class="jumbotron jumbotron-fluid text-center head-detail-forum">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <h1>Publik Diskusi</h1>
            </div>
            <div class="col-md-8">
              <p class="mt-2">
                PMII Rayon Fakultas Hukum Mempersembahkan WEBINAR NASIONAL :
                “MENGAPA KITA HARUS MENERIMA PANCASILA?"
              </p>
              <hr class="bg-white" />
              <p><span>di buat oleh : Gusma Rizkia</span></p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="info-detail">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <div class="card p-1">
              <img
                src="images/kelas-populer.jpeg"
                alt="image banner"
                class="img-fluid"
              />
              <div class="card-body">
                <div class="row mt-4 text-center">
                  <div class="col border-right">
                    <strong>
                      <h5>200 Peserta</h5>
                    </strong>
                  </div>
                  <div class="col">
                    <strong>
                      <h5>200 Peserta</h5>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-header mb-2">
                <h6>Forum Preview</h6>
              </div>
              <div class="card-body">
                <a href="" class="btn btn-secondary btn-block">
                  Pembahasan UUD 1945
                </a>
                <a href="" class="btn btn-secondary btn-block"
                  >Pembahasan Undang - Undang ...</a
                >
                <a href="" class="btn btn-secondary btn-block"
                  >Pancasila dan Agama</a
                >
                <a href="" class="btn btn-secondary btn-block"
                  >Pancasila Ideologi Siapa</a
                >

                <a href="" class="btn btn-secondary btn-block">Jawab & Jawab</a>
                <a href="" class="btn btn-outline-secondary btn-block disabled"
                  >30 Video</a
                >
              </div>
              <a href="" class="btn btn-get-started btn-block py-2">
                <h5>Gabung Forum</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="deskripsi-forum">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>Tentang Forum</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, est tempora! Nihil, rem possimus similique est
              exercitationem commodi quis autem, magnam dignissimos dolorum
              libero. Hic eligendi impedit quod soluta minima dolore. Ratione
              iure, nihil harum voluptate nisi, assumenda, autem laborum
              dignissimos perferendis doloribus at soluta itaque vitae accusamus
              fuga mollitia aspernatur voluptatum architecto debitis hic natus?
              Porro dolores est similique veritatis accusantium molestiae dolor
              magni asperiores, laborum velit officiis nihil laboriosam fugit,
              quo inventore quibusdam voluptatem pariatur maxime eligendi magnam
              perspiciatis quisquam. Fugiat numquam eaque voluptatem doloremque
              maiores autem consequuntur id excepturi culpa magnam nihil
              quisquam harum dolorem dolores commodi, laborum incidunt vel at
              minus quia! Accusamus error et fuga provident, sequi quas vero
              nobis, quam iusto neque rem. Doloribus rem nostrum, aspernatur
              exercitationem sequi, cumque ad sed error vel dolorem dolore iste
              eligendi accusantium nisi amet odit corporis architecto dolor!
              Cupiditate expedita doloremque ab ipsam voluptas sapiente,
              mollitia provident culpa ex qui animi, rem impedit sed alias
              repudiandae ipsa reprehenderit saepe est voluptatum dolores libero
              et! Omnis unde porro iusto ab, tenetur blanditiis eveniet vel
              assumenda aliquam dignissimos excepturi maxime. Dolore harum
              labore suscipit, nam dolorum ratione nisi corporis eligendi sequi
              eum magni explicabo amet! Sequi itaque laudantium ad!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-testimonials-heading" id="testimonialsHeading">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2>Terus Upgrade Keahlian Dengan Mengikuti Banyak Kelas</h2>
            <p>
              Sekali Bergabung Akses Selamanya <br />
              Tanpa Takut Dengan Jangka Waktu
            </p>
            <a href="#" class="btn btn-info px-4 mt-4 mx-1"> Forum Diskusi </a>
            <a href="#" class="btn btn-get-started px-4 mt-4 mx-1">
              Kelas Free
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
  name: "detail",
  components: {
    navbar,
  },
};
</script>

<style>
</style>