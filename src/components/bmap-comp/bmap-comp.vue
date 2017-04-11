<template>
  <div class="bmap-comp">
    <baidu-map class="bmap" :center="center" @ready="handler" :zoom="15"></baidu-map>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'bmap-comp',
    data () {
      return {
        center: {lng: 121.277284, lat: 31.173753}
      }
    },
    methods: {
      handler () {
        this.lng = 121.277284
        this.lat = 31.173753
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .bmap-comp {
    height: 2rem;
    .bmap {
      height: 100%;
    }
  }
</style>
