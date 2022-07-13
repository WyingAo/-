
<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li v-for="item in category.list" :key="item.id">
      <a href="#">{{ item.name }}</a>
      <div class="layer">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <RouterLink :to="`/category/sub/${sub.id}`">
              <img
               :src="sub.picture" alt="">
              />
              <p>{{sub.name}}</p>
              </RouterLink>
          </li>
        </ul>
      </div>
      <!-- 新增++++++++ -->
    </li>
  </ul>
</template>

<script lang="ts" setup>
import useStore from '@/store'
const { category } = useStore()
category.getHeaderNav()
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @wyaColor;
        border-bottom: 1px solid @wyaColor;
      }
    }
    // 新增样式
    &:hover {
      > a {
        color: @wyaColor;
        border-bottom: 1px solid @wyaColor;
      }
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
// 新增样式
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @wyaColor;
        }
      }
    }
  }
}
</style>