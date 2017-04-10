<template>
  <div class="detial-info">
    <h3 class="common-title"><span>小区信息</span></h3>
    <a href="http://www.baidu.com" class="detail-link clearfix">
      <p class="pull-left">邻里苑</p><i class="icon-home3 pull-right"></i>
    </a>
    <div class="group-row clearfix">
      <div class="group-column pull-left">
        <label>竣工时间</label><span>2008年</span>
      </div>
      <div class="group-column pull-left">
        <label>楼栋数</label><span>--</span>
      </div>
    </div>
    <div class="group-row clearfix">
      <div class="group-column pull-left">
        <label>绿化率</label><span>36%</span>
      </div>
      <div class="group-column pull-left">
        <label>停车位</label><span>120</span>
      </div>
    </div>
    <div class="group-row clearfix">
      <div class="group-column">
        <label>在售房源</label><span>6套(3室2卫  3套)</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail-info'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../assets/less/variable';
  @import "../../assets/less/title";

  .detial-info {
    color: @grey;
    padding: 0.15rem;
    margin-top: 0.1rem;
    background-color: @white;
    .detail-link {
      line-height: 0.22rem;
      margin-bottom: 0.08rem;
      i {
        display: block;
        line-height: 0.22rem;
      }
    }
    .group-row {
      line-height: 0.28rem;
      .group-column {
        width: 50%;
        label {
          display: inline-block;
          width: 0.66rem;
          color: @lightGray;
        }
        span {
          display: inline-block;
        }
      }
    }
  }
</style>
