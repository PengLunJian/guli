<template>
  <div class="house-list-container">
    <a href="http://www.baidu.com" class="house-list-outside clearfix">
      <div class="house-list-inside clearfix">
        <div class="house-list-image pull-left">
          <img src="../../assets/img/house.jpg" alt="南北通精致装修三房，无增值税，看房方便，商场地铁近"/>
        </div>
        <div class="house-list-info pull-right">
          <h2 class="house-list-title ellipsis">南北通精致装修三房，无增值税，看房方便，商场地铁近</h2>
          <div class="house-list-position clearfix">
            <address class="house-list-address pull-left">闵行 - 莘庄</address>
            <span class="house-list-price pull-right"><b>610</b>万</span>
          </div>
          <div class="house-list-size clearfix">
            <span class="house-list-layout pull-left">3室2厅2卫&nbsp;&nbsp;124m²</span>
            <span class="house-list-uprice pull-right">49194元/m²</span>
          </div>
          <ul class="house-list-advantage clearfix">
            <li class="house-list-agitem">满分</li>
            <li class="house-list-agitem">学区房</li>
            <li class="house-list-agitem">拎包入住</li>
          </ul>
        </div>
      </div>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'house-list-container'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .house-list-container {
    background-color: @white;
    .house-list-outside {
      padding: 0.15rem 0.15rem 0rem 0.15rem;
      .house-list-inside {
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #dedede;
      }
    }
    .house-list-image {
      width: 30%;
      height: 0.9rem;
      overflow: hidden;
      border-radius: 0.04rem;
    }
    .house-list-info {
      width: 70%;
      font-size: 0.12rem;
      padding-left: 0.15rem;
      .house-list-title {
        font-size: 0.15rem;
        line-height: 0.2rem;
        margin-bottom: 0.02rem;
      }
      .house-list-position {
        line-height: 0.22rem;
        .house-list-address {
          display: block;
          color: #666666;
        }
        .house-list-price {
          display: block;
          b {
            color: #ff8447;
            font-size: 0.16rem;
          }
        }
      }
      .house-list-size {
        color: #a3a3a3;
        line-height: 0.2rem;
        margin-bottom: 0.05rem;
        span {
          display: block;
        }
      }
      .house-list-agitem {
        float: left;
        color: #ff8447;
        padding: 0rem 0.02rem;
        margin-right: 0.05rem;
        border-radius: 0.02rem;
        border: 1px solid rgba(255, 132, 71, .6);
      }
    }
  }

</style>
