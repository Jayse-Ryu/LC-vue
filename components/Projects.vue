<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">
    <section class="section_0">
      <h2 class="section_0_title">
        <p>오늘 우리의 크리에이티브는</p>
        <p>내일 당신의 표준이 됩니다.</p>
      </h2>
    </section>

    <section class="section_1">
      <h3 class="section_1_title">주요 프로젝트</h3>
    </section>

    <section class="section_2">
      <div class="projects">
        <ul>
          <li>
            <p>1</p>
          </li>
          <li>
            <p>2</p>
          </li>
          <li>
            <p>3</p>
          </li>
          <li>
            <p>4</p>
          </li>
          <li>
            <p>5</p>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
    export default {
        name: "projects",
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
    background-color: #0860a8;
    box-shadow: inset 0px -200px 20px -190px rgba(0,0,0,0.75);
  }

  .section_0_title {
    padding: 0;
    margin: 0;
  }

  .section_1 {
    background-color: #fff68f;
    padding: 20px 30px;
    .section_1_title {
      margin: 0;
      color: #313131;
    }
  }

  .section_2 {
    width: 100%;
    background-color: #737751;
  }

  .projects {
    ul {
      li {
        height: 100px;
      }/*projects ul li*/
    }/*projects ul*/
  }/*projects*/
</style>
