<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
  </div>
</template>

<script type="text/ecmascript-6">
  import DetailHeader from 'components/detail-header/detail-header'
  import DetailBanner from 'components/detail-banner/detail-banner'

  export default {components: {DetailBanner, DetailHeader}}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .detail {
    padding-top: 0.45rem;
    background-color: @white;
  }
</style>
