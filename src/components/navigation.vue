<script lang="ts" setup>
import gsap from 'gsap';
import { onMounted, ref, watch } from 'vue'
import { useStore } from '@/store/list.ts'
import { storeToRefs } from 'pinia'

const props = defineProps({
  height: { type: String, required: true },
  width: { type: String, required: false },
  dropdown_height: { type: String, required: false }
});
const store = useStore();
const { about, contact, creative, news, online, products, project, video } = storeToRefs(store);
const list:any = {
  about, contact, creative, news, online, products, project, video
}
console.log(store);

let dropdown_state = ref<Boolean>(false);
watch(dropdown_state, (newVal: any, _oldVal: any) => {
  (function () {
    gsap.to("#nano_navigation_background", {
      yPercent: newVal ? 80 : 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })()
})
onMounted(() => {

})

</script>

<template>
  <div id="nano_navigation_background" :style="{
    height: `calc( ${props.height} + ${props.dropdown_height})`,
    width: props.width
  }" @mouseenter="dropdown_state = true" @mouseleave="dropdown_state = false">
  </div>

  <div id="nano_navigation_list">
    <div v-for="(item, _index) in list">
      {{ item.value.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
#nano_navigation_background {
  background-color: #fffef9;
  color: black;
  position: absolute;
  z-index: 0;
  box-shadow: var(--el-box-shadow-dark);
  transform: translateY(-80%);
}

#nano_navigation_list {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>