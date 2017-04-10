<template>
  <div class="detail-copyright">
    <p class="company-copyright">版权所有&copy;谷粒好房(上海)电子商务有限公司</p>
    <p class="company-record">沪公网安备：31010402000555  沪ICP备 14012051号</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail-copyright'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .detail-copyright {
    color: @grey;
    text-align: center;
    line-height: 0.14rem;
    padding: 0.3rem 0rem;
    background-color: @light;
    .company-copyright {
      margin-bottom: 0.15rem;
    }
    .company-record {
      &:before {
        content: '';
        width: 0.15rem;
        height: 0.15rem;
        display: inline-block;
        vertical-align: middle;
        margin-top: -0.04rem;
        margin-right: 0.04rem;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: left center;
        background-image: url('../../assets/img/police_icon.png');
      }
    }
  }
</style>
