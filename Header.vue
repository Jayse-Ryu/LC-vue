<template>
  <!-- Header + Top Buttons -->
  <header class="header" :style="this.$parent.$data.mix_data.slide_mover" id="header">

    <!-- Logo -->
    <div class="head_logo">
      <router-link class="head_logo_inner" to="/">LC</router-link>
    </div>

    <!-- Hamburger Menu Button -->
    <div class="button_menu" id="button_menu" @click="$parent.$options.methods.slide_nav"></div>

    <!-- Top Buttons (Simple nav button) -->
    <div class="middle_menu">
      <div class="button_middle">
        <router-link class="button_middle_inner" to="/projects">프로젝트 &#62</router-link>
        <!--<a class="button_middle_inner" id="nav_mid_2" href="html/page_2.html">프로젝트 &#62</a>-->
      </div>
      <div class="button_middle">
        <router-link class="button_middle_inner" to="/recruit">채용정보 &#62</router-link>
        <!--<a class="button_middle_inner" id="nav_mid_7" href="html/page_7.html">채용정보 &#62</a>-->
      </div>
    </div>

  </header>
</template>

<script>
  export default {
    name: "app-header",
  }/*export*/
</script>

<style lang="scss" scoped>
  /* Header Start (logo, button) */
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px;
    margin-bottom: -50px;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86)
  }

  .header_slide {
    position: absolute;
    top: 0;
    left: -250px;
    width: 100%;
    padding: 25px;
    margin-bottom: -50px;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86)
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
    color: yellow;
    border: 3px solid yellow;
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
    color: yellow;
  }

  /* Center buttons */
  .button_middle {
    position: relative;
    width: 100px;
    height: 50px;
    line-height: 53px;
    float: right;
    color: yellow;
    z-index: 5000;
    right: 75px;
  }

  .button_middle_inner {
    color: yellow;
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
    color: yellow;
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
    both: clear;
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
      color: yellow;
      border: 2px solid yellow;
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
      color: yellow;
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
      color: yellow;
      border: 2px solid yellow;
      &:hover {
        border: 2px solid white;
        background-color: rgba(25, 25, 25, 0.6);
      }
    }
    .button_middle {
      //width: 75px;
      //height: 50px;
      //line-height: 53px;
      //right: 40px;
      //float: right;
      //color: yellow;
      visibility: hidden;
    }
  }/*=*/

</style>
