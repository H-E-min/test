<template>
  <div>
    <el-table :data="fromList" stripe style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="password" label="密码" width="180"> </el-table-column>
      <el-table-column label="适用性别" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == '0' ? '不限' : scope.row.sex == '1' ? '男' : '女'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fromList:[
        {
          "username":'zhangsan',
          "password":123,
          "sex":1
        },
        {
          "username":'lisi',
          "password":1234,
          "sex":2
        },
        {
          "username":'zhaoliu',
          "password":12345,
          "sex":0
        }
      ]
      
    }
  },
  mounted(){
    
  },
  methods:{
    handleUpdate(row){
      console.log(row)
    }
  }
}
</script>

<style>

</style>