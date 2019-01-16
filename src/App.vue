<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <router-link to="/goods">{{goods}}</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">{{ratings}}</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">{{sellers}}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";

export default {
  name: "app",
  data() {
    return {
      goods: '商品',
      ratings: '评价',
      sellers: '商家'
    };
  },
  components: {
    "v-header": Header
  }
};
</script>

<style lang="scss">
@import './src/common/scss/mixin.scss';

$tab-height: 40px;

#app {
  .tab {
    display: flex;
    width: 100%;
    height: $tab-height;
    line-height: $tab-height;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      >a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20)
        }
      }
    }
  }
}
</style>
