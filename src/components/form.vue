<script setup lang="ts">
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/input-number/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/date-picker/style/css'
import 'element-plus/es/components/option/style/css'
import 'element-plus/es/components/select/style/css'
import { ElInput, ElInputNumber, ElRadio, ElRadioGroup, ElDatePicker, ElOption, ElSelect, FormRules } from 'element-plus';
import { defineProps, reactive } from 'vue'
// import type { FormRules } from 'element-plus'




const props = defineProps(['height', 'width'])
let itemWidth: string = '180px'

interface DType {
    fieldName: string | number;
    type: string;
    example: any;
    desc: string;
    required: boolean;
}
interface NumberOrStringDictionary {
    [index: string]: any
}
const fieldVal = (rule: any, value: any, callback: any) => {
    if(rule.type == "string" && value === ""){
        callback(new Error('输点东西进去'))
    }else{
        callback()
    }
    console.log(rule, value, callback());


}
let test1: Array<object> = [
    {
        "fieldName": "subSystemCode",
        "type": "String",
        "example": null,
        "desc": "子系统代码",
        "required": true
    },
    {
        "fieldName": "customerCode",
        "type": "String",
        "example": null,
        "desc": "用户编码",
        "required": true
    },
    {
        "fieldName": "endDate",
        "type": "Date",
        "example": "yyyy-MM-dd",
        "desc": "到期时间",
        "required": true
    },
    {
        "fieldName": "orgCount",
        "type": "Long",
        "example": null,
        "desc": "租户数量",
        "required": true
    },
    {
        "fieldName": "mac",
        "type": "Set",
        "example": null,
        "desc": "授权MAC加密串",
        "required": false
    },
    {
        "fieldName": "accountCount",
        "type": "Long",
        "example": null,
        "desc": "账号数量",
        "required": false
    },
    {
        "fieldName": "ip",
        "type": "Set",
        "example": null,
        "desc": "服务器ip",
        "required": false
    },
    {
        "fieldName": "state",
        "type": "Radio",
        "example": [
            {
                "label": "可用",
                "value": 0
            },
            {
                "label": "不可用",
                "value": 1
            }
        ],
        "desc": "状态",
        "required": true
    }
]
let test2: Array<object> = [
    {
        "fieldName": "subSystemCode",
        "type": "String",
        "example": null,
        "desc": "子系统代码",
        "required": true
    },
    {
        "fieldName": "customerCode",
        "type": "String",
        "example": null,
        "desc": "用户编码",
        "required": true
    },
    {
        "fieldName": "endDate",
        "type": "Date",
        "example": "yyyy-MM-dd",
        "desc": "到期时间",
        "required": true
    },
    {
        "fieldName": "identityMulti",
        "type": "String",
        "example": null,
        "desc": "授权KEY/系统授权码",
        "required": false
    },
    {
        "fieldName": "salerEmail",
        "type": "String",
        "example": null,
        "desc": "销售员邮箱",
        "required": false
    },
    {
        "fieldName": "libCount",
        "type": "Integer",
        "example": null,
        "desc": "分馆总数量",
        "required": true
    },
    {
        "fieldName": "serviceDate",
        "type": "Date",
        "example": "yyyy-MM-dd",
        "desc": "免费服务到期时间",
        "required": false
    },
    {
        "fieldName": "hldCount",
        "type": "Long",
        "example": null,
        "desc": "馆藏数量",
        "required": true
    },
    {
        "fieldName": "1",
        "type": "Long",
        "example": null,
        "desc": "馆藏地点数量",
        "required": false
    },
    {
        "fieldName": "readerCount",
        "type": "Long",
        "example": null,
        "desc": "读者数量",
        "required": false
    },
    {
        "fieldName": "remark",
        "type": "String",
        "example": null,
        "desc": "信息备注",
        "required": false
    },
    {
        "fieldName": "isInterlibraryVersion",
        "type": "Radio",
        "example": [
            {
                "label": "是",
                "value": true
            },
            {
                "label": "否",
                "value": false
            }
        ],
        "desc": "是否馆际版本",
        "required": true
    },
    {
        "fieldName": "saler",
        "type": "String",
        "example": null,
        "desc": "销售姓名",
        "required": false
    },
    {
        "fieldName": "salerPhone",
        "type": "String",
        "example": null,
        "desc": "销售电话",
        "required": false
    },
    {
        "fieldName": "technician",
        "type": "String",
        "example": null,
        "desc": "技术服务人员",
        "required": false
    },
    {
        "fieldName": "technicianPhone",
        "type": "String",
        "example": null,
        "desc": "技术服务人员电话",
        "required": false
    },
    {
        "fieldName": "technicianEmail",
        "type": "String",
        "example": null,
        "desc": "技术服务人员邮箱",
        "required": false
    },
    {
        "fieldName": "payedAll",
        "type": "Radio",
        "example": [
            {
                "label": "是",
                "value": true
            },
            {
                "label": "否",
                "value": false
            }
        ],
        "desc": "是否付清全款",
        "required": false
    },
    {
        "fieldName": "libLevelCount",
        "type": "List",
        "example": [
            {
                "level": 1,
                "num": 1
            }
        ],
        "desc": "各级分馆数量",
        "required": false
    },
    {
        "fieldName": "libOutCircuCount",
        "type": "Long",
        "example": null,
        "desc": "馆外流通点数量",
        "required": false
    },
    {
        "fieldName": "type",
        "type": "Radio",
        "example": [
            {
                "label": "正式",
                "value": 1
            },
            {
                "label": "试用",
                "value": 0
            }
        ],
        "desc": "是否正式授权",
        "required": true
    },
    {
        "fieldName": "state",
        "type": "Radio",
        "example": [
            {
                "label": "可用",
                "value": 0
            },
            {
                "label": "不可用",
                "value": 1
            }
        ],
        "desc": "状态",
        "required": true
    }
]



function formatData(target: Array<any>): object {
    let e: NumberOrStringDictionary = {};
    let key: Array<object> = []
    target.forEach((element: Array<any>, num: number) => {
        element.forEach((item: DType, index: number) => {
            if ((item.type == "Long" || item.type == "Integer") && typeof (Number(item.fieldName)) == "number" && Number(item.fieldName) != null) {
                item.fieldName = 0
            }
            key[index] = item
        })
        e["form" + num] = key
        key = []
    });
    return e
}
function typeSelect(type: string, child: boolean) {
    child = child || false
    let el: any = null;
    switch (true) {
        case type == "String":
            el = child ? '' : ElInput
            break;
        case type == "Long" || type == "Integer":
            el = child ? '' : ElInputNumber;
            break;
        case type == "Radio":
            el = child ? ElRadio : ElRadioGroup;
            break;
        case type == "Date":
            el = child ? '' : ElDatePicker;
            break;
        case type == "List":
            el = child ? ElOption : ElSelect;
            break
        case type == "Set":
            el = child ? '' : ElInput
            break
    }
    return el
}
const form = reactive<any>(formatData([test1, test2]));
console.log(form);

const rules = reactive<FormRules<any>>({})
for (let i = 0; i < Object.keys(form).length; i++) {
    console.log(i);
    form[Object.keys(form)[i]].forEach((_item: any, index: number) => {
        rules[`${Object.keys(form)[i]}[${index}].fieldName`] = [{ required: true, validator: fieldVal, trigger: 'blur' }]
    })

}
console.log(rules);
console.log(form.form1);




</script>

<template>
    <div id="code" :style="{ 'height': props.height + 'px', 'width': props.width + 'px' }">
        <button class="icon" style="right: 10px; background-color: #F56C6C;">
            <el-icon size="15">
                <CloseBold />
            </el-icon>
        </button>
        <button class="icon" style="right: 45px; background-color: #409EFF;">
            <el-icon size="15">
                <Notification />
            </el-icon>
        </button>
        <button class="icon" style="right: 80px; background-color: #67C23A;">
            <el-icon size="15">
                <Check />
            </el-icon>
        </button>
        <el-collapse class="collapse" :style="{ 'width': props.width + 'px' }">
            <el-form class="demo-form-inline" :model="form" label-width="100px" label-position="left" :inline="true"  :rules ="rules" >
                <el-scrollbar :height="height - 60">
                    <el-collapse-item :title="index" :name="index" v-for="(item, index) in form" :key="item">
                        <div class="collapse-item">
                            <el-form-item :label="element.desc" v-for="element, num in item" class="demo" :key="element.desc" :prop="`${index}[${num}].fieldName`" >
                                <component :is="typeSelect(element.type, false)" v-model="element.fieldName">
                                    <template v-if="Array.isArray(element.example)">
                                        <component v-for="child in element.example"
                                            :is="typeSelect(form[index][num].type, true)"
                                            :label="element.type == 'List' ? child.num : child.label"
                                            :value="element.type == 'List' ? child.level : false">
                                        </component>
                                    </template>
                                </component>
                            </el-form-item>
                        </div>


                    </el-collapse-item>
                </el-scrollbar>

                <el-form-item class="submit">
                    <el-button type="danger">清除</el-button>
                    <!-- <el-button type="success" @click="submitForm(form)">提交</el-button> -->
                </el-form-item>
            </el-form>
        </el-collapse>
    </div>
</template>

<style lang="scss" scoped>
.demo-form-inline {
    :deep(.el-input) {
        --el-input-width: v-bind(itemWidth);
    }

    :deep(.el-input-number) {
        width: v-bind(itemWidth)
    }

    :deep(.el-date-editor) {
        --el-date-editor-width: v-bind(itemWidth)
    }

    :deep(.el-radio-group) {
        width: v-bind(itemWidth)
    }

    :deep(.el-form-item__label) {
        align-items: center;
    }

    .demo {
        height: 100px;
        align-items: center;

    }

}

#code {
    overflow: hidden;
    position: relative;
    background-color: #fff;
    overflow-y: hidden;
    padding-top: 50px;
    padding-left: 2%;
    padding-right: 2%;
    box-shadow: var(--el-box-shadow-dark);
    border: 1px solid var(--el-border-color);
    border-radius: 18px;
}

.icon {
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 90%;
    border: none;
    top: 0;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
}

.collapse {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.collapse-item {
    height: 100%;
    width: 100%;
    margin-top: 20px;
    border-radius: 0;
}

.submit {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
}
</style>