<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <input type="hidden" v-bind:value="where_am_i = 5">

    <img class="main_image" src="../assets/pages/location/location.jpg" alt="page background image">

    <section class="section_0">
      <h2 class="section_0_title">
        <p>영감과 휴식이 만나는 공간</p>
      </h2>
    </section>

  </div>
</template>

<script>
    export default {
        name: "location"
    }
</script>

<style lang="scss" scoped>

</style>
