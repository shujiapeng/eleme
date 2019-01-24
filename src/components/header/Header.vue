<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <div class="icon" :class="classMap[seller.supports[0].type]"></div>
          <div class="text">{{seller.supports[0].description}}</div>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="icon"></span><span class="text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background-wrapper">
      <div class="background">
        <img :src="seller.avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      classMap: ["decrease", "discount", "special", "invoice", "guarantee"]
    };
  }
};
</script>

<style lang="scss">
@import "../../common/scss/mixin.scss";

$header-height: 134px;

.header {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    > .avatar {
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      > img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          @include bg-image("imgs/brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            @include bg-image("imgs/decrease_1");
          }
          &.discount {
            @include bg-image("imgs/discount_1");
          }
          &.guarantee {
            @include bg-image("imgs/guarantee_1");
          }
          &.invoice {
            @include bg-image("imgs/invoice_1");
          }
          &.special {
            @include bg-image("imgs/special_1");
          }
        }
        .text {
          display: inline-block;
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      text-align: center;
      .count {
        vertical-align: top;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        margin-left: 2px;
        font-size: 10px;
        line-height: 24px;
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
    .icon {
      display: inline-block;
      vertical-align: top;
      width: 22px;
      height: 12px;
      margin-top: 8px;
      @include bg-image("imgs/bulletin");
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .text {
      vertical-align: top;
      font-size: 10px;
      margin: 4px;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 10px;
    }
  }
  .background-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(10px);
    width: 100%;
    height: 136px;
    .background {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
