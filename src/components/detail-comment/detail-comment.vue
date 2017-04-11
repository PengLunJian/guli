<template>
  <div class="detail-comment">
    <h3 class="common-title"><span>最新点评</span></h3>
    <ul class="detail-comment-container">
      <li class="detail-comment-item clearfix" v-for="item in items">
        <div class="detail-comment-img pull-left">
          <img src="../../assets/img/detail_person.jpg" alt=""/>
          <a href="http://www.baidu.com">进入微店</a>
        </div>
        <div class="detail-comment-info pull-left">
          <div class="detail-comment-sn">
            <em class="detail-comment-shop">春晖店</em>.
            <span class="detail-comment-name">田盼利</span>
          </div>
          <em class="detail-comment-phone">13681662359</em>
          <p class="detail-comment-heary ellipsis">黄埔城市花园 108.00m² 142.00 万</p>
          <div class="detail-comment-tm clearfix">
            <time class="detail-comment-time pull-left">2017-4-10 10:55:38 更新</time>
            <a href="javascript:void(0);" class="detail-comment-more pull-right"
               @click="showAll(item['index'])">{{item['htmlText']}}&gt;&gt;</a>
          </div>
          <p class="detail-comment-description" :class="{hidden:item['isHidden']}">
            户型：2室2厅1卫  面积：108m2  ，结构小高层，单价13148，贷款在中国银行，税金27000，评估总价108万，首付66.5万，满2年，诚心出售，看房预约请拨打我的手机户型：2室2厅1卫  面积：108m2  ，结构小高层，单价13148，贷款在中国银行，税金27000。
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'detail-comment',
    data () {
      return {
        items: [
          {index: 0, isHidden: true, htmlText: '查看全部'},
          {index: 1, isHidden: true, htmlText: '查看全部'}
        ]
      }
    },
    methods: {
      showAll: function (index) {
        if (this.items[index].isHidden) {
          this.items[index].isHidden = false
          this.items[index].htmlText = '收起'
        } else {
          this.items[index].isHidden = true
          this.items[index].htmlText = '查看全部'
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .detail-comment {
    padding: 0.15rem;
    margin-top: 0.1rem;
    background-color: @white;
    .detail-comment-container {
      padding-top: 0.08rem;
      .detail-comment-item {
        padding: 0.1rem 0rem;
        border-bottom: 1px solid @borderColorGray;
        &:last-child {
          border: none;
          padding-bottom: 0rem;
        }
        .detail-comment-img {
          width: 30%;
          img {
            border-radius: 0.05rem;
            border: 1px solid @borderColorGray;
          }
          a {
            color: @white;
            text-align: center;
            line-height: 0.2rem;
            margin-top: 0.1rem;
            font-size: 0.12rem;
            background-color: @orange;
          }
        }
        .detail-comment-info {
          width: 70%;
          color: @darkGrey;
          line-height: 0.2rem;
          padding-left: 0.15rem;
          text-align: justify;
          .detail-comment-sn {
            color: @grey;
            margin-bottom: 0.05rem;
          }
          .detail-comment-phone {
            display: block;
            color: @orange;
            font-size: 0.17rem;
            line-height: 0.24rem;
            margin-bottom: 0.05rem;
          }
          .detail-comment-heary {
            margin-bottom: 0.05rem;
          }
          .detail-comment-tm {
            line-height: 0.22rem;
            margin-bottom: 0.06rem;
            .detail-comment-time {
              display: block;
              color: @deepWhite;
            }
            .detail-comment-more {
              color: @orange;
              font-weight: bold;
              padding: 0rem 0.05rem;
            }
          }
          .detail-comment-description {
            height: auto;
            position: relative;
            &.hidden {
              height: 0.58rem;
              overflow: hidden;
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
</style>
