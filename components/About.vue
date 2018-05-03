<template>
  <div class="main_role" id="main_role"
       :style="this.$parent.$data.mix_data.slide_mover"
       @click="$parent.$options.methods.only_close">
    <div class="main">
      <section class="section_0">
        <div class="section_0_content_1">
          <p>디지털 미디어 광고 퍼포먼스를 이끌어가는 능력은</p>
          <p>수많은 경험과 노력으로 만들어진다.</p>
        </div>
      </section>
      <!--section 0-->

      <section class="section_1">
        <p>엘씨 벤처스는</p>
        <h2>감성과 기술이 만납니다.</h2>
        <p>크리에이티브한 엘씨 벤처스는 브랜딩과 웹사이트 및 이커머스 솔루션</p>
        <p>그리고 다양한 미디어 컨텐츠를 포함한 통합 마케팅 솔루션을 제공하는 디지털 에이전시입니다.</p>
        <br/>
        <p>사람의 감성을 닮은 디자인에 디지털 기술을 더함으로써</p>
        <p>고객의 비즈니스에 필요한 아름답고도 유용한 최신의 크리에이티브 솔루션을 한발 앞서 제공합니다.</p>
      </section>
      <!--section 1-->

      <section class="section_2">
        <div>
          <p class="section_2_title">엘씨 벤처스가 하는 일</p>
          <h3 class="section_2_describe">우리의 비지니스는 새로움에 대한 도전입니다.</h3>
          <div>
            <ul class="what_we_doing">
              <li class="doing_list">
                <p class="doing_list_title">웹사이트</p>
                <p>
                  우리는 사용자 경험을 통해 브랜드를 이야기합니다.
                  사용자에게 초점을 맞추고 고객이 원하는 브랜드의 고유한 정체성을 전달하며
                  경쟁력있는 웹사이트를 구축하기 위해 끊임없이 고민합니다.
                </p>
                <ul class="doing_ul">
                  <li>UX/UI</li>
                  <li>마이크로 사이트</li>
                  <li>웹 표준화</li>
                  <li>반응형 웹</li>
                </ul>
              </li>

              <li class="doing_list">
                <p class="doing_list_title">E-커머스</p>
                <p>
                  E-커머스는 브랜드와 고객을 연결합니다.
                  소비자가 원하는 정보는 쉽게, 개인 결제 정보는 안전하도록 설계하여
                  고객의 매출 증대에 기여합니다.
                </p>
                <ul class="doing_ul">
                  <li>온라인 쇼핑몰</li>
                  <li>모바일 앱</li>
                  <li>프로모션</li>
                  <li>인터페이스 디자인</li>
                </ul>
              </li>

              <li class="doing_list">
                <p class="doing_list_title">브랜딩</p>
                <p>
                  브랜드는 소비자와의 관계입니다.
                  브랜딩 전략에 따른 명확하면서도 혁신적인 디자인 아이덴티티를 구현하여
                  소비자 기반의 브랜드 자산가치를 높입니다.
                </p>
                <ul class="doing_ul">
                  <li>홈페이지</li>
                  <li>BI/CI</li>
                  <li>홍보영상</li>
                </ul>
              </li>

              <li class="doing_list">
                <p class="doing_list_title">마케팅</p>
                <p>
                  고객과 우리의 목표는 같습니다.
                  고객의 니즈와 시장에 대한 깊은 통찰력으로 새로운 트렌드를 끌어내어
                  우리의 고객은 ‘다르다.’는 차별화된 메시지를 소비자에게 명확하게 전달합니다.
                </p>
                <ul class="doing_ul">
                  <li>온라인 프로모션</li>
                  <li>디지털 마케팅</li>
                  <li>컨텐츠 마케팅</li>
                </ul>
              </li>

              <li class="doing_list">
                <p class="doing_list_title">모바일</p>
                <p>
                  스마트폰은 이제 일상이 되었습니다.
                  장소, 환경에 구애받지 않고
                  언제 어디서든 이용이 가능한 모바일웹 구현으로 PC와 동일한 경험을 제공합니다.
                </p>
                <ul class="doing_ul">
                  <li>모바일 웹</li>
                  <li>모바일 웹</li>
                  <li>M 커머스</li>
                  <li>하이브리드 앱</li>
                </ul>
              </li>

              <li class="doing_list">
                <p class="doing_list_title">미디어</p>
                <p>
                  훌륭한 경험은 매체를 가리지 않습니다.
                  영상, 전시, 광고 등 다양한 미디어에서
                  차별화된 크리에이티브로 마음을 움직이는 디자인을 추구합니다.
                </p>
                <ul class="doing_ul">
                  <li>모션그래픽</li>
                  <li>바이럴</li>
                  <li>전시영상</li>
                  <li>인포그래픽</li>
                </ul>
              </li>
            </ul>
          </div><!--what we doing wrap-->
        </div><!--bind all in section-->
      </section>
      <!--section 2-->

      <section class="section_3">
        <div class="section_3_boxes">
          <div class="meet_box_1">
            <h3>엘씨 사람들</h3>
            <h4>팀을 만나보세요.</h4>
            <p>기획, 디자이너, 개발자 등 각 분야에서</p>
            <p>탁월한 엘씨벤처스의 팀을 소개합니다.</p>
            <div class="router_wrap">
              <router-link class="router" to="/people">더 알아보기 &#62</router-link>
            </div>
          </div>
          <div class="meet_box_2">
            <h3>엘씨 사무실</h3>
            <h4>사무실을 소개합니다.</h4>
            <p>멋진 카페들이 많은 서울숲에 있는 엘씨벤처스는</p>
            <p>자유롭고 크리에이티브한 공간입니다.</p>
            <div class="router_wrap">
              <router-link class="router" to="/contact">더 알아보기 &#62</router-link>
            </div>
          </div>
        </div><!--boxes-->
      </section>
      <!--section 3-->

    </div><!--Main-->
  </div><!--Main role-->
</template>

<script>
  export default {
      name: "about",
  }
</script>

<style lang="scss" scoped>
  /*
  ===============================================
    Page 1
  ===============================================
  */

  .main {
    position: relative;
    top: 0;
    left: 0;
    z-index: 400;
    background-image: url('../assets/unsplash1_low.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 50%;
  }/*main pictures*/

  /* section 0 start */
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
    font-size: 50px;
    font-weight: lighter;
    word-break: keep-all;
    white-space: pre-line;
    background-color: rgba(0,0,0,0.5);
    box-shadow: inset 0px -200px 20px -190px rgba(0,0,0,0.75);
  }

  .section_0_content_1 {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    transform: unset;
  }

  @media (max-width: 1200px) {
    .section_0 {
      position: relative;
      top: 0;
      left: 0;
      z-index: 400;
      width: 100%;
      height: 100vh;
      padding-top: calc(50vh - 25px);
      color: #fff68f;
      text-align: center;
      font-size: 28px;
      word-break: keep-all;
      white-space: pre-line;
    }
  }/*=*/
  /* section 0 end */

  /* section 1 start */
  .section_1 {
    width: 100%;
    padding: 50px 20px;
    background-color: #efefef;
    text-align: center;
    color: #515151;
  }
  /* section 1 end */

  /* section 2 start */
  .section_2 {
    .section_2_title {
      color: #fff68f;
    }
    .section_2_describe {
      font-size: 25px;
    }
    width: 100%;
    padding: 50px 20px;
    background-color: steelblue;
    color: #efefef;
    text-align: center;
    .what_we_doing {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      .doing_list {
        display: inline-block;
        width: 45%;
        min-width: 340px;
        max-width: 400px;
        min-height: 125px;
        padding: 10px 30px;
        vertical-align: top;
        text-align: left;
        .doing_list_title{
          font-size: 22px;
          padding: 10px 0;
          color: #fff68f;
        }
        .doing_ul {
          padding: 15px 22px;
          font-size: 14px;
          text-align: left;
          color: #d1d1d1;
          li {
            list-style: disc;
          }
        }
      }
    }
  }
  /* section 2 end */

  .section_3 {
    padding: 0;
    .section_3_boxes {
      position: relative;
      text-align: center;
      background-color: #1c3448;
      .meet_box_1 {
        width: 50%;
        min-height: 255px;
        vertical-align: top;
        float: left;
        padding: 40px 20px;
        background-color: #1c3448;
        color: #efefef;
      }
      .meet_box_2 {
        width: 50%;
        min-height: 255px;
        vertical-align: top;
        float: left;
        padding: 40px 20px;
        background-color: #2a4e6c;
        color: #efefef;
      }
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      h3 {
        margin: 0;
        font-size: 15px;
      }
      h4 {
        font-size: 25px;
        margin: 0;
        padding: 20px 0;
      }
      .router_wrap {
        padding: 20px 0;
        font-size: 14px;
      }
      .router {
        color: #fff68f;
        &:hover {
          color: #efefef;
        }
      }
    }
  } /*section 3 ended*/
</style>
