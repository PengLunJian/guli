<template>
  <div class="house-filter-container">
    <ul class="house-filter-select clearfix">
      <li class="house-filter-option" v-for="tab in tabs" @click="showFilter(tab['index'])">{{tab['value']}}</li>
    </ul>
    <div class="house-filter-content" :class="{hide:isHide}">
      <div class="house-filter-bg" :class="{hide:isHide}" @click="hideFilter"></div>
      <div class="house-filter-item" :class="{hide:tabs[0].isHide}">
        <ul class="house-addr-tab clearfix">
          <li class="house-addr-tabbar">区域</li>
          <li class="house-addr-tabbar">地铁</li>
        </ul>
        <div class="house-addr-content clearfix">
          <div class="house-addr-ctls">
            <a class="active" href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
            <a href="http://www.baidu.com">不限</a>
          </div>
          <div class="house-addr-ctls">
            <a class="active" href="http://www.baidu.com">全部</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
            <a href="http://www.baidu.com">大华</a>
          </div>
        </div>
        <div class="house-addr-buttons clearfix">
          <a href="http://www.baidu.com" class="btn clear">清空</a>
          <a href="http://www.baidu.com" class="btn confirm">确定</a>
        </div>
      </div>
      <div class="house-filter-item" :class="{hide:tabs[1].isHide}">
        <div class="house-filter-stg">
          <div class="house-filter-group"></div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">户型 ( 室 )</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">一室</a></li>
              <li><a href="http://www.baidu.com">两室</a></li>
              <li><a href="http://www.baidu.com">三室</a></li>
              <li><a href="http://www.baidu.com">四室</a></li>
              <li><a href="http://www.baidu.com">五室</a></li>
              <li><a href="http://www.baidu.com">五室以上</a></li>
            </ul>
          </div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">户型 ( 卫 )</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">一卫</a></li>
              <li><a href="http://www.baidu.com">两卫</a></li>
              <li><a href="http://www.baidu.com">三卫</a></li>
              <li><a href="http://www.baidu.com">三卫以上</a></li>
            </ul>
          </div>
          <div class="house-filter-group"></div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">特色</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">上门实勘</a></li>
              <li><a href="http://www.baidu.com">满五</a></li>
              <li><a href="http://www.baidu.com">满二</a></li>
              <li><a href="http://www.baidu.com">唯一</a></li>
              <li><a href="http://www.baidu.com">学区房</a></li>
              <li><a href="http://www.baidu.com">地铁房</a></li>
            </ul>
          </div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">房龄</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">5年内</a></li>
              <li><a href="http://www.baidu.com">5-10年</a></li>
              <li><a href="http://www.baidu.com">11-20年</a></li>
              <li><a href="http://www.baidu.com">20年以上</a></li>
            </ul>
          </div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">朝向</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">南北通透</a></li>
              <li><a href="http://www.baidu.com">东西向</a></li>
              <li><a href="http://www.baidu.com">朝南</a></li>
              <li><a href="http://www.baidu.com">朝北</a></li>
              <li><a href="http://www.baidu.com">朝东</a></li>
              <li><a href="http://www.baidu.com">朝西</a></li>
            </ul>
          </div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">楼层</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">1-6层</a></li>
              <li><a href="http://www.baidu.com">7-15层</a></li>
              <li><a href="http://www.baidu.com">16层以上</a></li>
            </ul>
          </div>
          <div class="house-filter-group">
            <h3 class="house-filter-title">类型</h3>
            <ul class="house-filter-stm clearfix">
              <li><a href="http://www.baidu.com">普通住宅</a></li>
              <li><a href="http://www.baidu.com">公寓</a></li>
              <li><a href="http://www.baidu.com">别墅</a></li>
              <li><a href="http://www.baidu.com">新里洋房</a></li>
              <li><a href="http://www.baidu.com">老公房</a></li>
              <li><a href="http://www.baidu.com">公寓</a></li>
              <li><a href="http://www.baidu.com">其他</a></li>
            </ul>
          </div>
        </div>
        <div class="house-addr-buttons clearfix">
          <a href="http://www.baidu.com" class="btn clear">清空</a>
          <a href="http://www.baidu.com" class="btn confirm">确定</a>
        </div>
      </div>
      <div class="house-filter-item" :class="{hide:tabs[2].isHide}">
        <ul class="house-filter-sort">
          <li><a href="http://www.baidu.com">综合排序</a></li>
          <li><a href="http://www.baidu.com">总价最低</a></li>
          <li><a href="http://www.baidu.com">总价最高</a></li>
          <li><a href="http://www.baidu.com">面积最下</a></li>
          <li><a href="http://www.baidu.com">面积最大</a></li>
          <li><a href="http://www.baidu.com">综合排序</a></li>
          <li><a href="http://www.baidu.com">总价最低</a></li>
          <li><a href="http://www.baidu.com">总价最高</a></li>
          <li><a href="http://www.baidu.com">面积最下</a></li>
          <li><a href="http://www.baidu.com">面积最大</a></li>
          <li><a href="http://www.baidu.com">综合排序</a></li>
          <li><a href="http://www.baidu.com">总价最低</a></li>
          <li><a href="http://www.baidu.com">总价最高</a></li>
          <li><a href="http://www.baidu.com">面积最下</a></li>
          <li><a href="http://www.baidu.com">面积最大</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'house-filter-container',
    data () {
      return {
        isHide: true,
        tabs: [
          {index: 0, value: '地区', isHide: true},
          {index: 1, value: '筛选', isHide: true},
          {index: 2, value: '排序', isHide: true}
        ]
      }
    },
    methods: {
      hideFun: function () {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].isHide = true
        }
      },
      showFilter: function (index) {
        this.hideFun()
        this.isHide = false
        this.tabs[index].isHide = false
      },
      hideFilter: function () {
        this.isHide = true
        this.hideFun()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable.less";

  .house-filter-container {
    position: relative;
    .house-filter-select {
      color: @grey;
      padding: 0.1rem 0rem;
      background-color: @white;
      border-bottom: 1px solid @border-color-gray;
      .house-filter-option {
        width: 33.3333%;
        float: left;
        text-align: center;
        line-height: 0.2rem;
        border-right: 1px solid @border-color-gray;
        &:last-child {
          border-right: none;
        }
        &:after {
          content: '';
          display: inline-block;
          vertical-align: middle;
          margin-left: 0.03rem;
          margin-top: -0.02rem;
          border-top: 0.05rem solid @grey;
          border-left: 0.05rem solid transparent;
          border-right: 0.05rem solid transparent;
        }
      }
    }
    .house-filter-content {
      position: absolute;
      left: 0px;
      width: 100%;
      height: calc(100vh - 0.81rem);
      overflow: hidden;
      &.hide{
        visibility: hidden;
      }
      .house-filter-bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        visibility: visible;
        background-color: rgba(0, 0, 0, .5);
        transition: all 300ms ease;
        &.hide {
          opacity: 0;
          visibility: hidden;
        }
      }
      .house-filter-item {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
        width: 100%;
        height: 4rem;
        overflow: hidden;
        background-color: @white;
        transition: all 300ms ease;
        transform: translateY(0rem);
        &.hide {
          z-index: 0;
          transform: translateY(-4rem);
        }
        &:nth-child(3) {
          padding-bottom: 0.46rem;
          background-color: @light;
        }
        .house-addr-tab {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 1;
          width: 100%;
          line-height: 0.45rem;
          background-color: @white;
          border-bottom: 1px solid @border-color-gray;
          .house-addr-tabbar {
            width: 50%;
            float: left;
          }
        }
        .house-addr-content {
          height: 100%;
          padding: 0.46rem 0rem;
          .house-addr-ctls {
            float: left;
            width: 50%;
            height: 100%;
            overflow-y: auto;
            line-height: 0.45rem;
            -webkit-overflow-scrolling: touch;
            background-color: @white;
            a {
              border-bottom: 1px solid @border-color-gray;
              &.active {
                color: @orange;
                background-color: @light;
              }
            }
            &:nth-child(2) {
              background-color: @light;
              a {
                border: none;
              }
            }
          }
        }
        .house-addr-buttons {
          position: absolute;
          left: 0px;
          bottom: 0px;
          z-index: 10;
          width: 100%;
          line-height: 0.45rem;
          background-color: @white;
          .btn {
            float: left;
            width: 25%;
            color: @grey;
            font-size: 0.16rem;
            border-top: 1px solid @border-color-gray;
            &.confirm {
              width: 75%;
              color: @white;
              border-color: @orange;
              background-color: @orange;
            }
          }
        }
        .house-filter-stg {
          width: 100%;
          max-height: 100%;
          overflow-y: auto;
          padding: 0rem 0.15rem;
          -webkit-overflow-scrolling: touch;
        }
        .house-filter-group {
          padding: 0.15rem 0rem;
          border-bottom: 1px solid #dfdfdf;
          &:last-child {
            border: none;
          }
          .house-filter-title {
            color: @grey;
            font-weight: 400;
            text-align: left;
            font-size: 0.14rem;
            line-height: 0.21rem;
            margin-bottom: 0.05rem;
          }
          .house-filter-stm {
            font-size: 0.12rem;
            line-height: 0.26rem;
            margin-left: -0.05rem;
            margin-right: -0.05rem;
            li {
              float: left;
              width: 25%;
              padding: 0.05rem;
              a {
                color: #777777;
                border-radius: 0.26rem;
                border: 1px solid @border-color-gray;
              }
            }
          }
        }
        .house-filter-sort {
          height: 100%;
          overflow-y: auto;
          line-height: 0.45rem;
          -webkit-overflow-scrolling: touch;
          li {
            border-bottom: 1px solid @border-color-gray;
            a {
              color: @grey;
            }
          }
        }
      }
    }
  }
</style>
