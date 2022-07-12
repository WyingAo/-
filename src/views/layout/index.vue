<template>
   <AppTopnav></AppTopnav>
   <AppHeader></AppHeader>
   <main class="app-body">
    <RouterView></RouterView>
   </main>
  <AppFooter></AppFooter>
</template>

<script lang="ts" setup name="Layout">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>