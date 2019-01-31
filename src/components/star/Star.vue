<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="(itemClass, key) in itemsClass" :key="key" :class="itemClass"></span>
  </div>
</template>
<script>
const LENGTH = 5,
  CLASS_ON = "on",
  CLASS_OFF = "off",
  CLASS_HALF = "half";

export default {
  name: "v-star",
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return "star-" + this.size;
    },
    itemsClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0;
      let integer = Math.floor(score);

      for (let i = 0; i < integer; i++) {
        result.push(CLASS_ON);
      }
      if (hasDecimal) {
        result.push(CLASS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLASS_OFF);
      }

      return result;
    }
  }
};
</script>

<style lang="scss">
@import "../../common/scss/mixin.scss";

.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./imgs/star48_on");
      }
      &.off {
        @include bg-image("./imgs/star48_off");
      }
      &.half {
        @include bg-image("./imgs/star48_half");
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./imgs/star36_on");
      }
      &.off {
        @include bg-image("./imgs/star36_off");
      }
      &.half {
        @include bg-image("./imgs/star36_half");
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./imgs/star24_on");
      }
      &.off {
        @include bg-image("./imgs/star24_off");
      }
      &.half {
        @include bg-image("./imgs/star24_half");
      }
    }
  }
}
</style>

