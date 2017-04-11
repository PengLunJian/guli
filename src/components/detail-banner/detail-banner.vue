<template>
  <div class="house-content">
    <div class="house-image">
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
        <div class="swiper-mask clearfix">
          <ul class="swiper-advantage clearfix">
            <li class="swiper-advantage-item">实勘房源</li>
            <li class="swiper-advantage-item">满五</li>
            <li class="swiper-advantage-item">随时看房</li>
            <li class="swiper-advantage-item">学区房</li>
          </ul>
          <div class="swiper-code">1&nbsp;/&nbsp;6</div>
        </div>
      </div>
    </div>
    <div class="house-info">
      <p class="house-des ellipsis multiple">南北通精致装修三房，无增值税，看房方便，商场地铁近</p>
      <div class="house-price clearfix">
        <em class="house-total-price">610万</em>
        <em class="house-unit-price">49194元/m²</em>
      </div>
      <div class="house-acreage">
        <ul class="house-ag-ct clearfix">
          <li class="house-ag-item">124.27m²</li>
          <li class="house-ag-item">3室2厅2卫</li>
          <li class="house-ag-item">低层（共 9 层）</li>
          <li class="house-ag-item">南北</li>
          <li class="house-ag-item">普通住宅</li>
        </ul>
        <p>竣工时间：2008年</p>
        <p>距离5号线春申路站764米</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'static/plugins/swiper/swiper-3.3.1.min.js'
  require('static/plugins/swiper/swiper-3.3.1.min.css')
  export default {
    name: 'detail-banner',
    mounted () {
      (function (mySwiper) {
        mySwiper = new Swiper('.house-content .swiper-container', {
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
  @import "../../assets/less/variable";

  .house-content {
    background-color: @white;
    .house-image {
      min-height: 2.1rem;
    }
    .swiper-container {
      position: relative;
      .swiper-mask {
        position: absolute;
        left: 0px;
        bottom: 0px;
        z-index: 1;
        width: 100%;
        height: auto;
        color: @white;
        font-size: 0.12rem;
        padding: 0.1rem 0.15rem;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6));
        .swiper-advantage {
          float: left;
          .swiper-advantage-item {
            float: left;
            margin-right: 0.06rem;
            padding: 0rem 0.03rem;
            line-height: 0.16rem;
            border: 1px solid @white;
            /*border-radius: 0.04rem;*/
          }
        }
        .swiper-code {
          float: right;
          line-height: 0.18rem;
        }
      }
    }

    .house-info {
      text-align: center;
      padding: 0.15rem;
      .house-des {
        font-size: 0.18rem;
        font-weight: bold;
        line-height: 0.28rem;
      }
      .house-price {
        color: @orange;
        font-size: 0.17rem;
        padding: 0.1rem 0.15rem;
        border-bottom: 1px solid @borderColorGray;
        em {
          float: left;
          display: block;
          width: 50%;
          height: 0.18rem;
          text-align: right;
          line-height: 0.18rem;
          padding-right: 0.3rem;
          border-right: 1px solid @borderColorGray;
          &:last-child {
            border: none;
            text-align: left;
            padding-left: 0.3rem;
          }
        }
      }
    }

    .house-acreage {
      color: @grey;
      font-size: 0.15rem;
      padding-top: 0.15rem;
      .house-ag-ct {
        line-height: 0.14rem;
        .house-ag-item {
          display: inline-block;
          padding: 0.05rem 0rem;
          &:after {
            content: '';
            display: block;
            float: right;
            height: 0.14rem;
            width: 0px;
            margin: 0px 0.07rem;
            border-right: 1px solid #000000;
          }
          &:last-child {
            &:after {
              border: none;
            }
          }
        }
      }
      p {
        padding-top: 0.08rem;
      }
    }
  }
</style>
