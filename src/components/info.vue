<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { regionData } from 'element-china-area-data'
import tabs from '@/components/tab.vue'

interface detailType {
  id: number;
  company_ids: Array<any>;
  name: string;
  province: any;
  city: any;
  district: any;
  address: any;
  sales_mode: any;
  status: string;
  source: object;
  partner_level: object;
  category: object;
  weixin: any;
  phone: any;
  mobile: any;
  email: any;
  partner_type: string;
  charge: object;
  aider: Array<any>;
  department: object;
  agent: Array<any>;
  child_ids: Array<any>;
  comment: any;
  tax_name: any;
  tax_code: any;
  tax_address: any;
  tax_phone: any;
  tax_bank: any;
  tax_account: any;
  current_system: any;
  first_date: any;
  client_order: Array<any>;
  check_status: string;
  former_name: any;
  history_charge: Array<any>;
  label: Array<any>;
}
let detail = ref<detailType>(
  {
    "id": 115083,
    "company_ids": [
      {
        "id": 1,
        "name": "xxxxxxxxx"
      }
    ],
    "name": "长春市党委校",
    "province": {
      "id": 8927,
      "name": "河南省"
    },
    "city": {
      "id": 8928,
      "name": "郑州市"
    },
    "district": {
      "id": 8929,
      "name": "市辖区"
    },
    "address": null,
    "sales_mode": null,
    "status": "潜在客户",
    "source": {
      "id": 10,
      "name": "上门拜访"
    },
    "partner_level": {
      "id": 1,
      "name": "普通客户"
    },
    "category": {
      "id": 4,
      "name": "企事业"
    },
    "weixin": null,
    "phone": null,
    "mobile": null,
    "email": "",
    "partner_type": "客户",
    "charge": {
      "id": 71,
      "name": "客户名称"
    },
    "aider": [],
    "department": {
      "id": 111,
      "name": "销售部"
    },
    "agent": [],
    "child_ids": [
      {
        "id": 115084,
        "name": "xxx经理",
        "sales_mode": null,
        "phone": "111",
        "mobile": "111",
        "weixin": "",
        "source": null,
        "partner_level": null,
        "category": null,
        "department": {
          "id": 111,
          "name": "销售部"
        },
        "charge": {
          "id": 71,
          "name": "客户名称"
        }
      }
    ],
    "comment": "",
    "tax_name": "",
    "tax_code": "",
    "tax_address": "",
    "tax_phone": "",
    "tax_bank": "",
    "tax_account": "",
    "current_system": "无",
    "first_date": null,
    "client_order": [],
    "check_status": "待审核",
    "former_name": null,
    "history_charge": [],
    "label": []
  }
)
let form = ref({
  address: { name: '地址', value: '吉林省 长春市 朝阳区' },
  mode: { name: '模式', value: '直销' },
  status: { name: '客户状态', value: '潜在客户' },
  source: { name: '客户来源', value: '上门拜访' },
  level: { name: '客户等级', value: '三级重点客户' },
  category: { name: '客户类别', value: '企事业' },
  initialPeriod: { name: '首次成单日期', value: '2021-06-08' },
  currentSystem: { name: '目前使用系统', value: '' },
  formerName: { name: '曾用名', value: '' },
  historicalLeaders: { name: '历史负责人', value: '' },
  contactTypes: { name: '联系人类型', value: '客户' },
  company: { name: '公司', value: '' },
  head: { name: '负责人', value: '张也' },
  coordinator: { name: '协办人', value: '' },
  department: { name: '负责人部门', value: '公共图书馆事业部' },
  tag: { name: '标签', value: '' }
})
let bool = ref<boolean>(true);
function change(t: boolean) {
  bool.value = t
  console.log(bool);
}


let options: Array<any> = [
  {
    value: '直销',
    label: '直销'
  }
]
let data: Array<object> = reactive([
  {
    id: '', name: '广州图创计算机软件开发有限公司'
  },
  { id: '', name: '广州万升信息科技有限公司' },
])
function update(index: number) {
  data.splice(index, 1);
}
</script>

<template>
  <div id="info">

    <div class="header">
      <div class="header_info">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">客户详情</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">{{ detail.name }}</a></el-breadcrumb-item>
        </el-breadcrumb>
        <el-button color="#61649f" @click="change(false)" v-show="bool">编辑</el-button>
        <div v-show="!bool">
          <el-button color="#61649f" @click="change(true)">保存</el-button>
          <el-button @click="change(true)" native-type="reset" bg text>取消</el-button>
        </div>

      </div>
    </div>
    <div class="process">
      <div class="process_info">
        <el-button color="#61649f">审核客户</el-button>
        <el-tag size="large" type="info" style="color: #61649f;">有效</el-tag>
      </div>
    </div>
    <div class="block">
      <div class="block_info">
        <div class="block_title">
          <el-image style="width: 80px; height: 80px; margin-right: 15px; object-fit: fill;" />
          {{ detail.name }}
        </div>
        <el-form :model="detail" label-width="100px" label-position="left" style="margin-top: 20px; color: black;">
          <el-row :gutter="140">
            <el-col :span="12">
              <el-form-item label="地址">
                <div v-if="bool">{{ detail["province"].name }} {{ detail["city"].name }} {{ detail["district"].name }}</div>
                <div v-if="!bool">
                  <el-row>
                    <el-cascader size="default" :options="regionData"></el-cascader>
                  </el-row>
                  <el-row style="margin-top: 5px;">
                    <el-input :rows="2" type="textarea" placeholder="补充地址:街道名称 门牌号" />
                  </el-row>
                </div>
              </el-form-item>
              <el-form-item label="销售模式">
                <div v-if="bool">{{ detail["sales_mode"] }}</div>
                <div v-if="!bool">
                  <el-cascader size="default" :options="options"></el-cascader>
                </div>
              </el-form-item>
              <el-form-item label="客户状态">
                <div v-if="bool">{{ detail["status"] }}</div>
                <div v-if="!bool">
                  <el-cascader size="default" :options="options"></el-cascader>
                </div>
              </el-form-item>
              <el-form-item label="客户来源">
                <div v-if="bool">{{ detail["source"]["name"] }}</div>
                <div v-if="!bool">
                  <el-cascader size="default" :options="options"></el-cascader>
                </div>
              </el-form-item>
              <el-form-item label="客户等级">
                <div v-if="bool">{{ detail["partner_level"]["name"] }}</div>
                <div v-if="!bool">
                  <el-cascader size="default" :options="options"></el-cascader>
                </div>
              </el-form-item>
              <el-form-item label="客户类别">
                <div v-if="bool">{{ detail["category"]["name"] }}</div>
                <div v-if="!bool">
                  <el-input></el-input>
                </div>
              </el-form-item>
              <el-form-item label="首次成单日期">
                <div>{{ form["initialPeriod"].value }}</div>
              </el-form-item>
              <el-form-item label="目前使用系统">
                <div v-if="bool">{{ form["currentSystem"].value }}</div>
                <div v-if="!bool">
                  <el-input></el-input>
                </div>
              </el-form-item>
            </el-col>



            <el-col :span="12">
              <el-form-item label="曾用名">
                <div v-if="bool">{{ form["formerName"].value }}</div>
              </el-form-item>
              <el-form-item label="历史负责人"></el-form-item>
              <el-form-item label="联系人类型">{{ detail.partner_type }}</el-form-item>
              <el-form-item label="公司">
                <tabs v-if="bool" v-model:data="data" :edit="false" />
                <tabs v-if="!bool" :data="data" @update="update" :edit="true" />
              </el-form-item>
              <el-form-item label="负责人">
                <div v-if="bool">{{ form["head"].value }}</div>
                <div v-if="!bool">
                  <el-input></el-input>
                </div>
              </el-form-item>
              <el-form-item label=协办人>
                <div v-if="bool">{{ form["coordinator"].value }}</div>
                <div v-if="!bool">
                  <el-input></el-input>
                </div>
              </el-form-item>
              <el-form-item label="负责人部门">
                <div v-if="bool">{{ detail["department"]["name"] }}</div>
                <div v-if="!bool">
                  <el-input></el-input>
                </div>
              </el-form-item>
              <el-form-item label="标签">
                <div v-if="bool">{{ form["company"].value }}</div>
                <div v-if="!bool">
                  <el-cascader size="default" :options="options">
                  </el-cascader>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div class="block_tabs">
          <el-tabs type="border-card">
            <el-tab-pane label="联系人">
              <el-table style="width: 100%" stripe fit>
                <el-table-column prop="date" label="#"  />
                <el-table-column prop="name" label="名称"/>
                <el-table-column prop="address" label="电话"  />
                <el-table-column prop="address" label="手机"/>
                <el-table-column prop="address" label="微信" />
                <el-table-column prop="address" label="负责人部门"  />
                <el-table-column prop="address" label="负责人"  />
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="内部备注">内部备注</el-tab-pane>
            <el-tab-pane label="开票信息">开票信息</el-tab-pane>
            <el-tab-pane label="关联订单">关联订单</el-tab-pane>
          </el-tabs>
        </div>
      </div>


    </div>

  </div>
</template>

<style lang='scss' scoped>
:deep(.el-form-item__content){
  display: block;
}
:deep(.el-form-item) {
  margin-bottom: 4px;
}

#info {
  height: var(--info-height);
  width: 1000px;
  border: 1px solid var(--el-border-color);
}

.header {
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--el-box-shadow-lighter);

  .header_info {
    height: 80px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
  }
}

.process {
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--el-box-shadow-light);
  border-top: 1px solid var(--el-border-color);
  border-bottom: 1px solid var(--el-border-color);

  .process_info {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
  }
}

.block {
  margin: 20px auto;
  height: calc(var(--info-height) - 200px);
  width: 80%;
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  .block_info {
    height: calc(var(--info-height) - 240px);
    width: 95%;
    background-color: white;

  }

  .block_title {
    height: 80px;
    display: flex;
    justify-content: flex-start;
    font-size: 30px;
    color: #1D1D1D;
  }
  .block_tabs{
    margin-top: 30px;
  }



  .form_item {
    display: flex;
    color: #616163;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
  }

  .form_item_label {
    width: 105px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 600;
  }

  // .block_tabs {
  //   width: 100%;
  //   background-color: blue;
  // }
}

.block_row {
  height: auto;
  width: 400px;
  background-color: black;
}
</style>