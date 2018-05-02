<template>
  <footer class="footer">
    <div class="footer_wrap">
        <h6 class="footer_title">LC Ventures</h6>
        <div class="about_us">
          <ul class="about_us_lists">
            <li>
              <p>전화 070-8855-8390</p>
              <p>팩스 070-8855-9390</p>
              <p>biz@lcventures.co.kr</p>
            </li>
            <li>
              <p>엘씨벤처스 주식회사</p>
              <p>서울 성동구 뚝섬로 1길 25</p>
              <p>한라에코벨리 206호</p>
            </li>
            <li>
              <p>대표 권용무</p>
              <p>220-88-91971</p>
            </li>
          </ul>
        </div>

    </div>
  </footer>
</template>

<script>
    export default {
        name: "app-footer"
    }
</script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    width: 100%;
    bottom: calc(0px - 225px);
    padding: 50px 20px;
    background-color: yellow;
    .footer_wrap {
      .footer_title {
        display: inline;
        font-size: 22px;
        border: 2px solid #515151;
        padding: 5px 10px;
        color: #515151;
      }
    }
    .about_us {
      width: 100%;
      .about_us_lists {
        max-width: 1100px;
        padding: 10px 22px;
        color: #515151;
        margin: 0 auto;
        text-align: center;
        li {
          display: inline-block;
          min-width: 250px;
          vertical-align: top;
          padding: 15px 20px;
        }
      }
    }
  }
</style>
