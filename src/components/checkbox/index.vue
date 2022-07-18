
<template>
  <div class="xtx-checkbox">
    <i v-if="modelValue" class="iconfont icon-checked" @click="change"></i>
    <i v-else class="iconfont icon-unchecked" @click="change"></i>
    <span><slot></slot></span>
  </div>
</template>

<script lang="ts" setup name="XtxCheckbox">
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits<{(e:'update:modelValue',value:boolean):void,(e:'change',value:boolean):void}>()
const change = ()=>{
  emit('update:modelValue',!props.modelValue)
  emit('change',!props.modelValue)
}
</script>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @wyaColor;
    ~ span {
      color: @wyaColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>