<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">
    <input type="text" placeholder="contact">
  </div>
</template>

<script>
    export default {
        name: "contact",
    }
</script>

<style lang="scss" scoped>

</style>
