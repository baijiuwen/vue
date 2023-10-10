<template>
    <div class="flex items-center mb-4">
      <el-radio-group v-model="small" class="mr-4">
        <el-radio-button :label="false">default</el-radio-button>
        <el-radio-button :label="true">small</el-radio-button>
      </el-radio-group>
      <div>
        background:
        <el-switch v-model="background" class="ml-2" />
      </div>
      <div class="ml-4">
        disabled: <el-switch v-model="disabled" class="ml-2" />
      </div>
    </div>
  
    <hr class="my-4" />
  
    <div class="demo-pagination-block">
      <div class="demonstration">Total item count</div>
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">Change page size</div>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">Jump to</div>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">All combined</div>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div>
        <el-table :data="showTableData" style="width: 800px;" height="250">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="320" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
        </el-table>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  

  type data = {
    date: string,
    name: string,
    state: string,
    city: string,
    address: string,
    zip: string,
  }
  const c = () => {
    const tempData: data[] = []
    for(let i = 0; i < 1000; i++){
        tempData.push(
            {
                date: i.toString(),
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            }
      )
    }
    return tempData
  }
  
  const tableData: data[] = c()
  const total: number = tableData.length

  
  const currentPage = ref(5)
  const pageSize = ref(100)
  const small = ref(false)
  const background = ref(false)
  const disabled = ref(false)

  const pageData = () => {
    /**
    let tempTableData = []
    for(let i = (currentPage.value - 1) * pageSize.value; (i < currentPage.value * pageSize.value) && i < total; i++){
        tempTableData.push(tableData[i])
    }
    return tempTableData
     */
    return tableData.slice((currentPage.value - 1) * pageSize.value,(currentPage.value * pageSize.value))
  }

  let showTableData: data[] = pageData()

  
  const handleSizeChange = (val: number) => {
    showTableData = pageData()
  }
  const handleCurrentChange = (val: number) => {
    showTableData = pageData()
  }




  </script>
  
  <style scoped>
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
  .demo-pagination-block .demonstration {
    margin-bottom: 16px;
  }
  </style>