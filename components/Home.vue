<template>
  <!-- Video Area Started -->
  <main class="main_role" id="main_role"
        :style="this.$parent.$data.mix_data.slide_mover"
        @click="$parent.$options.methods.only_close">

    <div class="video_wrap" id="video_wrap">
      <div class="video_basket" id="video_basket">

        <!--
        <iframe type="text/html"
                src="https://www.youtube.com/embed/K0lL1HysGMc?&version=3&autoplay=1&loop=1&playlist=K0lL1HysGMc&showinfo=0&fs=0&disablekb=1&vq=auto&controls=0&rel=0&end=75"
                frameborder="0" volume="0" allowfullscreen webkitallowfullscreen mozallowfullscreen>
        </iframe>
        -->

        <iframe class="video" id="video"
                src="https://player.vimeo.com/video/221257502?autoplay=1&loop=1&color=ffffff&background=1&title=0&byline=0&portrait=0&controls=0"
                width="100%" height="100%" frameborder="0" volume="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>

        <div class="video_cover"></div>
      </div>
    </div>

    <!-- Main Context on video wrap -->
    <div class="main_title" >
      <p>유용하고 아름다운 디지털 디자인</p>
      <p>그리고 커뮤니케이션 마케팅</p>
    </div>

  </main>
</template>

<script>
    export default {
      name: "home",
    }
</script>

<style lang="scss" scoped>
  /*
  ===============================================
    Main page, Video Start
  ===============================================
  */

  /* Video wrap -> Video basket -> Video(iFrame) */
  .video_wrap {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #000;
    top: 0; right: 0; bottom: 0; left: 0;
    overflow: hidden;
    z-index: 10;
  }

  .video_basket {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: black;
    opacity: 0.4;
    z-index: 30;
  }

  .video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 20;
  }

  .video_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    background-image: url("../assets/pages/home/unsplash2.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    visibility: hidden;
  }

  /* Stretch Video */
  @media (min-aspect-ratio: 16/9) {
    .video_basket {
      height: 300%;
      top: -100%;
    }
  }/*=*/
  @media (max-aspect-ratio: 16/9) {
    .video_basket {
      width: 300%;
      left: -100%;
    }
  }/*=*/

  /*
  ===============================================
    Video End
  ===============================================
  */

  /* Main Text on Video */
  .main_title {
    position: relative;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    height: 100vh;
    padding-top: calc(50vh - 25px);
    color: #fff68f;
    text-align: center;
    font-size: 50px;
    font-weight: lighter;
    word-break: keep-all;
    white-space: pre-line;
    overflow: hidden;
  }

  /* Change Text size belongs to Web width */
  @media (max-width: 1000px) {
    .main_title {
      position: relative;
      top: 0;
      left: 0;
      z-index: 400;
      width: 100%;
      height: 100vh;
      padding-top: calc(50vh - 25px);
      color: #fff68f;
      text-align: center;
      font-size: 28px;
      word-break: keep-all;
      white-space: pre-line;
      overflow: hidden;
    }

  }/*=*/

  @media (max-width: 750px) {

    .video {
      visibility: hidden;
    }

    .video_cover {
      visibility: visible;
    }

  }/*=*/

</style>
