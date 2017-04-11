<template>
  <div class="house-recom">
    <h3 class="common-title"><span>同小区/板块同价位房型</span></h3>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="http://www.baidu.com" title="">
            <div class="item-image">
              <img src="../../assets/img/pic.jpg" alt=""/>
            </div>
            <div class="item-info">
              <span class="item-layout ellipsis">2室2厅1卫83m²</span>
              <p class="item-price ellipsis"><em>560</em>万<i>实勘</i></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'static/plugins/swiper/swiper-3.3.1.min.js'
  require('static/plugins/swiper/swiper-3.3.1.min.css')
  export default {
    name: 'detail-recom',
    mounted () {
      (function (mySwiper) {
        mySwiper = new Swiper('.house-recom .swiper-container', {
          freeMode: true,
          slidesPerView: 'auto',
          observer: true,
          observeParents: true
        })
      })()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .house-recom {
    margin-top: 0.1rem;
    padding-top: 0.15rem;
    background-color: @white;
    .swiper-container {
      padding: 0.08rem;
      .swiper-slide {
        width: 33.3333%;
        padding: 0.08rem;
        .item-image {
          height: 1.0rem;
          overflow: hidden;
          border-radius: 0.05rem;
        }
        .item-info {
          color: @grey;
          font-size: 0.12rem;
          line-height: 0.16rem;
          .item-layout, .item-price {
            display: block;
            margin-top: 0.05rem;
          }
          em {
            color: @orange;
            font-size: 0.14rem;
          }
          i {
            color: @white;
            margin-left: 0.05rem;
            border-radius: 0.02rem;
            padding: 0rem 0.02rem;
            background-color: @orange;
          }
        }
      }
    }
  }
</style>
