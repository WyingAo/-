<template>
   <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <HomeNew></HomeNew>
      <HomeHot></HomeHot>
      <HomeBrand></HomeBrand>
      <HomeProduct></HomeProduct>
      <HomeSpecial></HomeSpecial>
    </div>
  </div>
</template>

<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
</script>

<style></style>