<template>
  <!-- Right side hidden Navigation -->
  <nav class="navigation_wrap" id="navigation_wrap"
       :style="this.$parent.$data.mix_data.navigation_mover" >

    <!-- X close button -->
    <div class="menu_close" id="menu_close"
         @click="$parent.$options.methods.only_close"></div>

    <!-- Nav Category 1 About Company -->
    <ul class="nav_category" @click="$parent.$options.methods.navi_delay">
      <li>
        <router-link class="nav_a" to="/">홈</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/about">회사소개</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/projects">프로젝트</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/news">엘씨 뉴스</router-link>
      </li>
    </ul>

    <div class="menu_division"></div>

    <!-- Nav Category 2 About us -->
    <ul class="nav_category" @click="$parent.$options.methods.navi_delay">
      <li>
        <router-link class="nav_a" to="/people">엘씨 크루</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/location">엘씨 위치</router-link>
      </li>
    </ul>

    <div class="menu_division"></div>

    <!-- Nav Category 3 Others -->
    <ul class="nav_category" @click="$parent.$options.methods.navi_delay">
      <li>
        <router-link class="nav_a" to="/contact">연락처</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/recruit">채용정보</router-link>
      </li>
      <li>
        <router-link class="nav_a" to="/consult">프로젝트 의뢰</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
  export default {
    name: "app-navigator",
  }
</script>

<style lang="scss" scoped>
  /* Right Navigation CSS */
  .navigation_wrap {
    position: fixed;
    width: 250px;
    height: 100vh;
    background-color: #121212;
    top: 0;
    right: -250px;
    text-align: center;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    padding: 25px 0;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: inset 25px 0px 20px -20px rgba(0,0,0,0.5);
  }

  .nav_category {
    width: 90%;
    margin: 20px auto 20px auto;
    text-align: left;
    font-size: 18px;
    line-height: 25px;
    li {
      //transition: all 350ms cubic-bezier(.83,.01,.46,.86);
      margin: 8px 0;
      .nav_a {
        display: block;
        padding: 0 8px;
        color: #efefef;
        &:hover {
           color: #fff68f;
         }
      }/*List route links*/
    &:hover {
       cursor: pointer;
       background-color: #313131;
     }
    }/*Nav Lists*/
  }/*Nav category*/

  .menu_division {
    width: 25px;
    height: 1px;
    background-color: #c1c1c1;
    margin: 0 20px;
  }/* Divide bar */

  .menu_close {
    position: fixed;
    top: 30px;
    right: 1px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 100px;
    cursor: pointer;
    float: right;
    background-image: url("./assets/close_btn.png");
    background-position: 50% 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    filter: invert(80%);
    margin: -15px 15px 0 0;
    transition: all 350ms cubic-bezier(.83,.01,.46,.86);
    &:hover {
       transform: rotate(270deg);
     }
    &:hover:before {
       color: #efefef;
     }
  }/*menu close*/
  /* Hidden Navigation Ended */

</style>
