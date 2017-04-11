<template>
  <div class="detail-tabs">
    <ul class="detail-tab clearfix">
      <li class="detail-tab-item" :class="{active:tab['active']}" @click="changeModal(tab['index'])"
          v-for="tab in tabs">{{tab['value']}}

      </li>
    </ul>
    <ul class="detail-content">
      <li class="detail-content-item" :class="{active:tabs[0]['active']}">
        <bmap-comp></bmap-comp>
      </li>
      <li class="detail-content-item" :class="{active:tabs[1]['active']}">b</li>
      <li class="detail-content-item" :class="{active:tabs[2]['active']}">c</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BmapComp from '../bmap-comp/bmap-comp'
  export default {
    components: {BmapComp},
    name: 'deatail-tabs',
    data () {
      return {
        tabs: [
          {index: 0, value: '交通信息', active: true},
          {index: 1, value: '房源介绍', active: false},
          {index: 2, value: '户型图', active: false}
        ]
      }
    },
    methods: {
      changeModal: function (index) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].active = false
        }
        this.tabs[index].active = true
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .detail-tabs {
    margin-top: 0.1rem;
    padding: 0rem 0.15rem;
    background-color: @white;
    .detail-tab {
      text-align: center;
      line-height: 0.4rem;
      border-bottom: 1px solid @border-color-gray;
      .detail-tab-item {
        float: left;
        width: 33.333%;
        position: relative;
        &.active {
          color: @orange;
          &:before {
            content: '';
            width: 0.6rem;
            position: absolute;
            bottom: -1px;
            left: 50%;
            margin-left: -0.3rem;
            border: 0.02rem solid @orange;
          }
        }
      }
    }
    .detail-content {
      .detail-content-item {
        display: none;
        &.active {
          display: block !important;
        }
      }
    }
  }
</style>
