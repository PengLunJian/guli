<template>
  <div class="house-header-container">
    <i class="house-header-back icon-arrow-left"></i>
    <input class="house-header-search" type="text" name="search" placeholder="请输入小区名或地址"/>
    <i class="house-header-menu icon-menu" @click="showMenu"></i>
    <div class="modal house-menu-container">
      <div class="modal-bg" :class="{hide:isHide}" @click="hideMenu"></div>
      <div class="modal-content" :class="{hide:isHide}">
        <ul class="house-menu-side">
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">首页</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">新房</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">二手房</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">租房</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">海外房产</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">资讯</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">金融</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">个人中心</span></a>
          </li>
          <li class="house-menu-item">
            <a href="http://www.baidu.com"><span class="icon-home3">下载APP</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'house-header-container',
    data () {
      return {
        isHide: true
      }
    },
    methods: {
      showMenu: function () {
        this.isHide = false
      },
      hideMenu: function () {
        this.isHide = true
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable.less";
  @import "../../assets/less/font.less";

  .house-header-container {
    position: relative;
    padding: 0.05rem 0.4rem;
    background-color: @white;
    .house-header-back, .house-header-menu {
      width: 0.4rem;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      color: @grey;
      line-height: 0.4rem;
      font-size: 0.2rem;
    }
    .house-header-menu {
      left: auto;
      right: 0px;
    }
    .house-header-search {
      width: 100%;
      border-radius: 0.2rem;
      background-color: #eeeeee;
      padding: 0.075rem 0.075rem 0.075rem 0.4rem;
    }
    .modal {
      .modal-bg {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: 1001;
        visibility: visible;
        background-color: rgba(0, 0, 0, .5);
        transition: all 300ms ease;
        &.hide {
          opacity: 0;
          visibility: hidden;
        }
      }
      .modal-content {
        position: fixed;
        top: 0px;
        right: -1.7rem;
        width: 1.7rem;
        height: 100%;
        z-index: 1002;
        overflow-y: auto;
        background-color: @white;
        text-align: left;
        font-size: 0.14rem;
        transform: translateX(-1.7rem);
        transition: all 300ms ease;
        -webkit-overflow-scrolling: touch;
        &.hide {
          transform: translateX(0rem);
        }
        .house-menu-item {
          a {
            padding: 0rem 0.15rem;
            color: @grey;
          }
          span {
            display: block;
            line-height: 0.46rem;
            border-bottom: 1px solid @borderColorGray;
            &:before {
              margin-right: 0.1rem;
              color: #ff0000;
              font-size: 0.16rem;
            }
          }
        }
      }
    }
  }
</style>
