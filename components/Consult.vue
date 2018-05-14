<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 8">

    <img class="main_image" src="../assets/pages/consult/consult.jpg" alt="page background image">

    <section class="section_0">
      <h2 class="section_0_title">
        <p>항상 고객과 함께합니다.</p>
      </h2>
    </section>

  </div>
</template>

<script>
    export default {
        name: "consult"
    }
</script>

<style lang="scss" scoped>

</style>
