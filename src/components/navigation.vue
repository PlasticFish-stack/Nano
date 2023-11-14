<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  height: { type: String, required: true },
  width: { type: String, required: false },
  dropdown_height: { type: String, required: false }
})
let dropdown_boolean = ref<Boolean>(true);

console.log(dropdown_boolean.value);
</script>

<template>
  <TransitionGroup>
    <div id="nano_navigation" :style="{
      height: `calc( ${props.height} + ${props.dropdown_height})`,
      width: props.width
    }" key="background">
    </div>
    <div id="nano_nav_val" key="value">
      123
    </div>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
#nano_navigation {
  background-color: #fffef9;
  color: black;
  position: absolute;
  z-index: 0;

  box-shadow: var(--el-box-shadow-dark);
}
#nano_nav_val {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
</style>