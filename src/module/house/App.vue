<template>
  <div class="house">
    <div class="header">
      <house-header-container></house-header-container>
      <house-filter-container></house-filter-container>
    </div>
    <div class="section">
      <house-list-container></house-list-container>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import HouseListContainer from 'components/house-list/house-list'
  import HouseFilterContainer from 'components/house-filter/house-filter'
  import HouseHeaderContainer from 'components/house-header/house-header'
  export default {
    components: {HouseHeaderContainer, HouseFilterContainer, HouseListContainer}, name: 'app'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .house {
    padding-top: 0.81rem;
    .header {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: auto;
      text-align: center;
      background-color: @white;
    }
  }
</style>
