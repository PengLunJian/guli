<template>
  <div class="house-list-container">
    <div v-for="house in houseList" class="house-list-content">
      <a :href="house.link" class="house-list-outside clearfix">
        <div class="house-list-inside clearfix">
          <div class="house-list-image pull-left">
            <img :src="house.imgUrl" :alt="house.title"/>
          </div>
          <div class="house-list-info pull-right">
            <h2 class="house-list-title ellipsis">{{house.title}}</h2>
            <div class="house-list-position clearfix">
              <address class="house-list-address pull-left">{{house.address}}</address>
              <span class="house-list-price pull-right"><b>{{house.totalPrice}}</b>万</span>
            </div>
            <div class="house-list-size clearfix">
              <span class="house-list-layout pull-left">{{house.type}}&nbsp;&nbsp;{{house.mianji}}m²</span>
              <span class="house-list-uprice pull-right">{{house.unitPrice}}元/m²</span>
            </div>
            <ul class="house-list-advantage clearfix">
              <li class="house-list-agitem" v-for="item in house.tedian">{{item}}</li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  export default {
    name: 'house-list-container',
    data () {
      return {
        houseList: {}
      }
    },
    created () {
      this.$http.get('/api/house').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.houseList = response.data
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .house-list-container {
    background-color: @white;
    .house-list-outside {
      padding: 0.15rem 0.15rem 0rem 0.15rem;
      .house-list-inside {
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #dedede;
      }
    }
    .house-list-image {
      width: 30%;
      height: 0.9rem;
      overflow: hidden;
      border-radius: 0.04rem;
    }
    .house-list-info {
      width: 70%;
      font-size: 0.12rem;
      padding-left: 0.15rem;
      .house-list-title {
        font-size: 0.15rem;
        line-height: 0.2rem;
        margin-bottom: 0.02rem;
      }
      .house-list-position {
        line-height: 0.22rem;
        .house-list-address {
          display: block;
          color: #666666;
        }
        .house-list-price {
          display: block;
          b {
            color: #ff8447;
            font-size: 0.16rem;
          }
        }
      }
      .house-list-size {
        color: #a3a3a3;
        line-height: 0.2rem;
        margin-bottom: 0.05rem;
        span {
          display: block;
        }
      }
      .house-list-agitem {
        float: left;
        color: #ff8447;
        padding: 0rem 0.02rem;
        margin-right: 0.05rem;
        border-radius: 0.02rem;
        border: 1px solid rgba(255, 132, 71, .6);
      }
    }
  }

</style>
