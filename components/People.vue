<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 4">

    <img class="main_image" src="../assets/pages/people/people.jpg" alt="page background image">

    <section class="section_0">
      <h2 class="section_0_title">
        <p>좋은 마케팅, 더 좋은 사람들</p>
      </h2>
    </section>

  </div>
</template>

<script>
    export default {
        name: "people"
    }
</script>

<style lang="scss" scoped>

</style>
