<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 3">

    <img class="main_image" src="../assets/pages/news/news.jpg" alt="page background image">

    <section class="section_0">
      <h2 class="section_0_title">
        <p>엘씨벤처스의 도약은 현재진행형 입니다.</p>
      </h2>
    </section>

    <section class="section_1">

    </section>


  </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style lang="scss" scoped>

</style>
