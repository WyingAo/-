
<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
    <ul ref="pannel" class="goods-list">
      <li v-for="item in home.hotGoodList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name" ref="demo">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import useStore from '@/store'
import HomePanel from './home-panel.vue'
import { ref } from 'vue';
import { useLazyData } from '@/utils/hooks';
const { home } = useStore()
const target = useLazyData(()=>{
  home.getHotList()
})

</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>