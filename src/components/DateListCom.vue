<template>
  <div class="model_list">
    <div class="button_group line">
      <button v-if="onAddNewForm">新建</button>
      <button>删除</button>
      <button>导入</button>
      <button>导出</button>
    </div>

    <table>
      <slot name="dataHead">
        <!-- 支持外部加入数据填充 -->
        <tr>
          <td v-for="(attrItem,index) in modelAttr" :key="index">{{attrItem.display}}</td>
          <td>操作</td>
        </tr>
      </slot>

      <!-- 列表展现 -->
      <!-- 支持外部加入数据填充 -->
      <slot>
        <tr v-for="(item,index) in modelList" :key="index">
          <td v-for="(attrItem,index) in modelAttr" :key="index">{{item[attrItem.attribute]}}</td>
          <td>
            <button>编辑</button>
            <button>删除</button>
          </td>
        </tr>
      </slot>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      modelList:[]
    }
  },
  props:{
    //查询列表的ApiUrl
    listApiUrl:null,
    //行ID
    rowIdKey:null,
    //删除当前行记录的Api
    delApiUrl:null,
    //表单头
    modelAttr:[
      {display:'',attribue:''},
      {display:'',attribue:''},
      {display:'',attribue:''},
    ],

    //新建表单
    onAddNewForm:{
      type:Function,
      default:null
    },
    // 编辑表单获得数据
    onEditForm:{
      type:Function,
      default:null
    },
    // 是否需要操作
    isOpear:true,
    //是否分页
    isPage:true,
    //是否把查询方法执行权交给父组件
    refParent:false,
  },
  created(){
    //如果没有设置父组件执行权，在组件内执行
    if(!this.refParent){
      this.getModelList()
    }
  },
  computed(){
    option:{
      console.log('isOpear',this.isOpear)
      if(this.isOpear === undefined){
        return true2q 
      }else{
        return this.isOpear
      }
    }
  },
  methods:{
    getModelList(){
      console.log('正执行getlist')
      if(this.listApiUrl != null && this.listApiUrl != ''){
        //设置等待

      }
    }
  }

}
</script>

<style>

</style> 