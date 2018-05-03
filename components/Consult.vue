<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <section class="section_0">
      <h3>항상 고객과 함께합니다.</h3>
    </section>

  </div>
</template>

<script>
    export default {
        name: "consult",
    }
</script>

<style lang="scss" scoped>
  .section_0 {
    position: relative;
    top: 0;
    left: 0;
    z-index: 450;
    width: 100%;
    height: 100vh;
    padding-top: calc(50vh - 25px);
    color: #fff68f;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    word-break: keep-all;
    white-space: pre-line;
    background-color: rgba(0,0,0,0.5);
    box-shadow: inset 0px -200px 20px -190px rgba(0,0,0,0.75);
  }
</style>
