<script lang="ts" setup>
import gsap from 'gsap';
import { onMounted, ref, watch } from 'vue'
import { useStore } from '@/store/list.ts'
import { storeToRefs } from 'pinia'

const props = defineProps({
  height: { type: String, required: true },
  width: { type: String, required: false },
  dropdown_height: { type: String, required: true }
});
const store = useStore();
const { about, online, products, video, project, news, creative, contact } = storeToRefs(store);
const list: any = {
  about, contact, creative, news, online, products, project, video
};
console.log(list);

let dropdown_state = ref<Boolean>(false);
watch(dropdown_state, (newVal: any, _oldVal: any) => {
  (function (): void  {
    gsap.to("#navigation_background", {
      y: newVal ? 0 : "-" + props.dropdown_height,
      duration: 0.4,
      ease: "power2.out"
    })
  })()
});
function listEnter(el:HTMLLIElement, done:any): void {
  console.log(el, done);

}
onMounted(() => {
  gsap.set("#navigation_background", {
    y: "-" + props.dropdown_height
  })
});

</script>

<template>
  <div id="navigation" @mouseenter="dropdown_state = true" @mouseleave="dropdown_state = false">
    <div id="navigation_background" :style="{
      height: `calc( ${props.height} + ${props.dropdown_height})`,
      width: props.width,
    }">
    </div>
    <div id="navigation_list" :style="{
      height: props.height
    }">
      <div></div>
      <ul>
        <li v-for="col in list" class="navigation_list_col" :key="col.value.title">
          <a href="" class="navigation_list_link"> {{ col.value.title }} </a>
          <TransitionGroup tag="ul" :css="false" class="navigation_list_child" @enter="listEnter">
        <li v-for="(row, rowIndex) in  col.value.child" :key="row.title" class="navigation_list_child_row" v-show="dropdown_state">
          {{ rowIndex }}
        </li>
        </TransitionGroup>
        </li>
      </ul>
      <div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#navigation {
  color: var(--font-default-color);
  font-weight: 600;

  #navigation_background {
    background-color: #fffef9;
    position: absolute;
    z-index: 0;
    box-shadow: var(--el-box-shadow-dark);
  }

  #navigation_list {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    ul {
      display: flex;
      justify-content: center;
      position: relative;

      .navigation_list_col {
        display: flex;
        margin-left: 15px;
        margin-right: 15px;

        

        .navigation_list_child {
          position: absolute;
          display: flex;
          flex-direction: column;
          margin-top: 40px;

          .navigation_list_child_row {
            list-style: none;
            margin-bottom: 25px;
          }
        }
      }
    }
  }




}
</style>