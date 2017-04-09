<template>
  <div class="home-banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <img src="../../assets/img/pic.jpg" alt=""/>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <img src="../../assets/img/pic.jpg" alt=""/>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <img src="../../assets/img/pic.jpg" alt=""/>
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'static/plugins/swiper/swiper-3.3.1.min.js'
  require('static/plugins/swiper/swiper-3.3.1.min.css')
  export default {
    name: 'home-banner',
    mounted () {
      (function (mySwiper) {
        mySwiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          autoplay: 2000,
          loop: true,
          autoplayDisableOnInteraction: false
        })
      })()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable.less";

  .swiper-pagination-bullet-active {
    background-color: @white !important;
  }
</style>
