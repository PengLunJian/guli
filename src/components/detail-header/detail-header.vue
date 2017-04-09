<template>
  <div class="detail-header">
    <a href="http://www.baidu.com" class="icon-home3"></a>
    <h2 class="detail-title">邻里苑</h2>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail-header'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../assets/less/variable';
  @import '../../assets/less/font';

  .detail-header {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
    width: 100%;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    overflow: hidden;
    font-size: 0.16rem;
    background-color: @white;
    a {
      position: absolute;
      width: 0.45rem;
      top: 0px;
      left: 0px;
      line-height: 0.45rem;
    }
    .detail-title {
      font-size: 0.16rem;
      font-weight: normal;
    }
  }
</style>
