<template>
  <div class="home">
    <home-header></home-header>
    <home-banner></home-banner>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'components/home-header/home-header'
  import HomeBanner from 'components/home-banner/home-banner'
  export default {
    components: {HomeBanner, HomeHeader}, name: 'app'
  }
</script>

<style lang="less" rel="stylesheet/less">
  .home {
    padding-top: 0.45rem;
  }
</style>
