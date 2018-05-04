<template>
  <!-- Header + Top Buttons -->
  <header class="header"
          :style="this.$parent.$data.mix_data.slide_mover" id="header">

    <!-- Logo Area -->
    <div class="head_logo">
      <router-link class="head_logo_inner" to="/">LC</router-link>
    </div>

    <!-- Hamburger Menu Button -->
    <div class="button_menu" id="button_menu" @click="$parent.$options.methods.slide_nav"></div>

    <!-- Top Buttons (Simple nav button) -->
    <div class="middle_menu">
      <div class="button_middle" @click="$parent.$options.methods.navi_delay">
        <router-link class="button_middle_inner" to="/projects">프로젝트 &#62</router-link>
      </div>
      <div class="button_middle" @click="$parent.$options.methods.navi_delay">
        <router-link class="button_middle_inner"  to="/recruit">채용정보 &#62</router-link>
      </div>
    </div>
    <!--Top button - middle menu-->

  </header>
</template>

<script>
  export default {
    name: "app-header"
  }/*export*/
</script>

<style lang="scss" scoped>
  /* Header Start (logo, button) */
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    padding: 25px;
    margin-bottom: -50px;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    overflow: visible;
  }

  .head_logo {
    position: fixed;
    width: 150px;
    height: 150px;
    float: left;
    vertical-align: top;
    line-height: 150px;
    text-align: center;
    font-size: 50px;
    color: #fff68f;
    border: 3px solid #fff68f;
    z-index: 5000;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    &:hover {
       border: 3px solid white;
       background-color: rgba(25, 25, 25, 0.6);
     }
  }

  .head_logo_inner {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff68f;
  }

  /* Center buttons */
  .button_middle {
    position: relative;
    width: 100px;
    height: 50px;
    line-height: 53px;
    float: right;
    color: #fff68f;
    z-index: 5000;
    right: 75px;
  }

  .button_middle_inner {
    color: #fff68f;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    &:hover {
       color: white;
     }
  }

  /* Hamburger Menu button */
  .button_menu:before {
    width: 100%;
    height: 100%;
    content: '\2630';
    font-size: 35px;
    line-height: 53px;
    color: #fff68f;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
  }
  .button_menu {
    position: fixed;
    width: 50px;
    height: 50px;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    margin-left: calc(100% - 100px);
    z-index: 5000;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    &:hover:before {
       color: white;
     }
  }

  header:after {
    content: '';
    display: block;
    clear: both;
  }
  /* Header End and Clear float */

/*
===============================================
Media query
===============================================
*/

  /* Change Logo Size belongs to web width, and change button gap */
  @media (min-width: 301px) and (max-width: 1000px) {
    .head_logo {
      width: 50px;
      height: 50px;
      float: left;
      vertical-align: top;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff68f;
      border: 2px solid #fff68f;
      &:hover {
        border: 2px solid white;
        background-color: rgba(25, 25, 25, 0.6);
      }
    }

    .button_middle {
      width: 90px;
      height: 50px;
      line-height: 53px;
      right: 40px;
      float: right;
      color: #fff68f;
    }
  }/*=*/

  /* When it too much small hidden middle buttons */
  @media (max-width: 500px) {
    .head_logo {
      width: 50px;
      height: 50px;
      float: left;
      vertical-align: top;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff68f;
      border: 2px solid #fff68f;
      &:hover {
        border: 2px solid white;
        background-color: rgba(25, 25, 25, 0.6);
      }
    }
    .button_middle {
      visibility: hidden;
    }
  }/*=*/

</style>
