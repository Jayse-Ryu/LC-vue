<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">

    <img class="main_image" src="../assets/pages/projects/project.jpg" alt="page background image">

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
            <div class="career_wrap">
              <img class="career_image" src="../assets/pages/projects/temporary-0.png" alt="Our project - temp 1">
              <div class="career_inform">
                <p>Green box</p>
              </div>
            </div>
          </li>

          <li>
            <div class="career_wrap">
              <img class="career_image" src="../assets/pages/projects/temporary-1.png" alt="Our project - temp 1">
              <div class="career_inform">
                <p>White box</p>
              </div>
            </div>
          </li>

          <li>
            <div class="career_wrap">
              <img class="career_image" src="../assets/pages/projects/temporary-2.png" alt="Our project - temp 1">
              <div class="career_inform">
                <p>Blue box</p>
              </div>
            </div>
          </li>

          <li>
            <div class="career_wrap">
              <img class="career_image" src="../assets/pages/projects/temporary-0.png" alt="Our project - temp 1">
              <div class="career_inform">
                <p>Green box</p>
              </div>
            </div>
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
    font-size: 40px;
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
      position: relative;
      margin: 0 auto;
      background-color: #fff68f;
      li {
        width: 100%;
        overflow: hidden;
        .career_wrap {
          max-height: 300px;
          .career_image {
            width: 100%;
            max-height: 300px;
            float: left;
            object-fit: cover;
          }
          .career_inform {
            position: relative;
            padding: 15px;
            top: calc(50% + 15px);
            left: 50%;
            transform: translate(-50% -50%);
            color: #1ff68f;
          }
        }
      }/*projects ul li*/
    }/*projects ul*/
  }/*projects*/

</style>
