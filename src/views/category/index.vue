<template>
  <div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <Bread>
        <BreadItem to="/">首页</BreadItem>
        <BreadItem to="/">居家</BreadItem>
        <BreadItem>水壶</BreadItem>
      </Bread>
     
      <carousel :slides="home.bannerList" autoPlay :duration="3000"></carousel>

      <!-- 所有二级分类 -->
    <div class="sub-list">
    <h3>全部分类</h3>
    <ul>
    <li v-for="item in topCategory.children" :key="item.id">
      <a href="javascript:;">
        <img :src="item.picture" >
        <p>{{item.name}}</p>
      </a>
    </li>
  </ul>
    </div>

    <!-- 分类关联商品 -->
   <div class="ref-goods" v-for="item in topCategory.children" :key="item.id">
    <div class="head">
    <h3>- {{item.name}}-</h3>
    <p class="tag">温暖柔软，品质之选</p>
    <More />
   </div>
  <div class="body">
    <GoodsItem v-for="goods in item.goods" :key="goods.id" :goods="goods"/>
  </div>
  </div>
    </div>
  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import useStore from '@/store';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import {createRouter, createWebHashHistory, useRoute} from 'vue-router'
import GoodsItem from './components/goods-item.vue'
const {category,home} = useStore()
const route = useRoute()
const router = createRouter({
  history:createWebHashHistory(),
  scrollBehavior:()=>{
    return {
      top:0
    }
  },
  routes:[]
})
const {topCategory} =storeToRefs(category)
home.getBannerList()
console.log(route.fullPath)
// watchEffect(()=>{
//   const id = route.params.id as string
//   if(route.fullPath === `/category/sub/${id}`){
//     category.getTopCategory(id)
//   }
// })
category.getTopCategory(route.params.id as string)
</script>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @wyaColor;
          }
        }
      }
    }
  }
}

.ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
</style>