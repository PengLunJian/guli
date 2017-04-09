<template>
  <div class="home-header">
    <address><i class="icon-home3"></i>上海</address>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home-header'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../assets/less/variable';
  @import '../../assets/less/font';

  .home-header {
    width: 100%;
    height: 0.45rem;
    position: fixed;
    top: 0px;
    left: 0px;
    line-height: 0.45rem;
    padding: 0rem 0.15rem;
    background-color: @white;
    background-repeat: no-repeat;
    background-size: auto 0.28rem;
    background-position: center center;
    background-image: url('../../assets/img/logo.png');
    address {
      float: left;
      i {
        float: left;
        display: block;
        color: @orange;
        font-size: 0.16rem;
        line-height: 0.45rem;
        margin-right: 0.05rem;
      }
    }
  }
</style>
