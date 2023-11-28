<script lang="ts" setup>
import gsap from 'gsap';
import { onBeforeUpdate, onMounted, ref, watch } from 'vue'
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
let dropdown_state = ref<Boolean>(false);

watch(dropdown_state, (newVal: any, _oldVal: any) => {
  (function (): void {
    gsap.to("#navigation_background", {
      y: newVal ? 0 : "-" + props.dropdown_height,
      duration: 0.4,
      ease: "power2.out"
    })
  })()
});
function enter(_bool: boolean, index: any){
  (function ():void{
    console.log(index);
    
    gsap.to(".navigation_list_child[index]", {
    
    })
  })()
  
}

onMounted(() => {
  const linkHeight: number = (document.querySelectorAll(".navigation_list_link")[0] as HTMLAnchorElement).offsetHeight
  const linkMarginTop: number = (+props.height.replace('px', '') - linkHeight) 
  gsap.set("#navigation_background", {
    y: "-" + props.dropdown_height
  })
  gsap.set('#navgiation_list_dashboard', {
    marginTop: linkMarginTop / 2
  })
  gsap.set('.navigation_list_child', {
    opacity: 0,
    visibility: "hidden"
  })
});

</script>

<template>
  <div id="navigation" @mouseenter="dropdown_state = true" @mouseleave="dropdown_state = true">
    <div id="navigation_background" :style="{
      height: `calc( ${props.height} + ${props.dropdown_height})`,
      width: props.width,
    }">
    </div>
    <div id="navigation_list" :style="{
      height: props.height
    }">
    
      <ul id="navgiation_list_dashboard">
        <li v-for="(col, _colKey, colIndex) in list" class="navigation_list_col" :key="col.value.title" @mouseenter="enter(true, colIndex)" @mouseleave="enter(false, colIndex)">
          
          <a href="" class="navigation_list_link"> {{ col.value.title }} </a>
          <ul class="navigation_list_child">
            <li v-for="(row, rowIndex) in  col.value.child" :key="row.title" class="navigation_list_child_row">
              {{ rowIndex }}
            </li>
          </ul>
        </li>
      </ul>
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
    justify-content: center;
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    ul {

      display: flex;
      position: relative;

      .navigation_list_col {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;

        .navigation_list_child {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
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