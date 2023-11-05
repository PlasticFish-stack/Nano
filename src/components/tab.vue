<script setup lang='ts'>
import { onMounted } from 'vue';
const props = defineProps(['data', 'width', 'edit'])
const emit = defineEmits(['update'])
function deleteTab(index:number){
    emit('update', index)
}
onMounted(() => {


})
</script>

<template>
    <div :class="{ tabs: props.edit }">
        <div class="tab" v-for="item,index in props.data">
            <div :style="{
                'text-overflow': 'ellipsis',
                'width': props.edit ? '120px' : 'auto',
                'overflow': 'hidden'
            }">
                {{ item.name }}
            </div>

            <div v-if="props.edit" @click="deleteTab(index)"
                style="height: 14px; width: 14px; border-radius: 90px; background-color: #C0C4CC; display: flex; justify-content: center; align-items: center;">
                <el-icon size="10" color="#7e7e8f">
                    <Close />
                </el-icon>
            </div>

        </div>
    </div>
</template>

<style lang='scss' scoped>
.tabs {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: calc(100% - 5px);
    flex-grow: 1;
    height: auto;
    padding: 5px 0px 10px;
    background-color: rgb(233, 238, 245);
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
    transition: var(--el-transition-box-shadow);
    transform: translate3d(0, 0, 0);
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
    padding-left: 5px;
    min-height: 18px;
}

.tab {
    background-color: rgb(235, 235, 235);
    width: 90%;
    border-color: rgb(192, 192, 192);
    margin-bottom: 5px;
    color: black;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    height: 24px;
    padding: 0 9px;
    font-size: 12px;
    line-height: 1;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
}
</style>