<template>
  <div id="app">
    <v-header :seller="post.seller"></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <router-link to="/goods">{{chinese.goods}}</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">{{chinese.ratings}}</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">{{chinese.seller}}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import api from './api/mainApi.js'

export default {
  name: "app",
  data() {
    return {
      chinese: {
        goods: '商品',
        ratings: '评价',
        seller: '商家'
      },
      post: {
        seller: {}
      }
    };
  },
  props: {
    seller: {}
  },
  created() {
    api.header.getHeader((data)=>{
      this.post.seller = data
    })
    
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
    // 调用1px混合 配合border-1px class使用
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
