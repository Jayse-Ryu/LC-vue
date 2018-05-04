<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <img class="main_image" src="../assets/pages/consult/consult.jpg" alt="page background image">

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

</style>
