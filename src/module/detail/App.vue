<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-comment></detail-comment>
    <detail-info></detail-info>
    <detail-recom></detail-recom>
    <detail-copyright></detail-copyright>
  </div>
</template>

<script type="text/ecmascript-6">
  import DetailHeader from 'components/detail-header/detail-header'
  import DetailBanner from 'components/detail-banner/detail-banner'
  import DetailRecom from 'components/detail-recom/detail-recom'
  import DetailInfo from 'components/detail-info/detail-info'
  import DetailCopyright from 'components/detail-copyright/detail-copyright'
  import DetailComment from 'components/detail-comment/detail-comment'

  export default {components: {DetailComment, DetailCopyright, DetailInfo, DetailRecom, DetailBanner, DetailHeader}}
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .detail {
    padding-top: 0.45rem;
  }
</style>
