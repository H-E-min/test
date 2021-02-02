<template>
  <div v-if="isShow" :class="formClass">
      <div class="title_close">
        <label @mousedown="moveForm">{{boxTitle}}</label><span @click="closeForm">关闭</span>
      </div>
      <slot><h3>请填充需要的元素</h3></slot>
      <div class="button_group">
        <button @click="save">保存</button>
        <button @click="closeForm">取消</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //组件内的参数
      isShow:false,
      formClass:['bigBox','flow']
    }
  },
  props:{
    boxTitle:null,
    //表单模型
    model:{},
    //后端新增数据API的地址
    addApiUrl:null,
    editApiUrl:null,
    idKey:null,
    formType:null,
    onValidate:{
      type:Function,
      default:null
    }
  },
  created(){
    switch(this.formType){
      case 1:{this.formClass = ['bigBox'];}break;
      case 2:{this.formClass = ['flow'];}break;
    }
  },
  methods:{
    save(){
      //如果有验证则作验证
      if(this.onValidate){
        //只是定义
        if(this.onValidate(this.model)){
         this.addOrEdit()
        }
      }else{
         this.addOrEdit()
      }
    },
    addOrEdit(){
      if(this.idKey == null){
            this.add()
          }else{
            this.edit()
          }
    },
    add(){
        if(this.model != null && this.model != undefined){
          //调用api
          if(this.addApiUrl != null && this.addApiUrl != undefined){
                console.log('新增数据保存成功')
            // axios.post(url,this.model).then(res=>{
            // })
          }else{
            alert('addApiUrl为空，请添加')
          }
        }else{
          alert("请输入正确的值")
        }
    },
    edit(){
       if(this.editApiUrl != null && this.editApiUrl != undefined){
              console.log('编辑数据保存成功')
          // axios.post(url,this.model).then(res=>{
          // })
        }else{
          alert('editApiUrl为空，请添加')
        }
    },
    //显示窗体
    showForm(){
      this.isShow = true;
    },
    closeForm(){
      this.isShow = false;
    },
    //拖拽
    moveForm(event){
      //获取目标元素的父元素的父元素
      let targetBox = event.target.parentNode.parentNode;
     

      //被拖动的对象的初始位置
      let boxLeft = targetBox.offsetLeft;
      let boxTop = targetBox.offsetTop;

      //鼠标初始位置
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      //算出鼠标相对元素的位置，因为鼠标必须在盒子内部点击移动
      //所以鼠标的x，y值会比盒子大，两者相减得到两者的相对位置
      let dx = mouseX - boxLeft;
      let dy = mouseY - boxTop;

      //鼠标按下并移动的事件
      document.onmousemove = event =>{
        //移动当前元素，鼠标当前的位置减去两者的相对距离
        targetBox.style.left = (event.clientX - dx) + 'px'
        targetBox.style.top = (event.clientY - dy) + 'px'

      }
      //鼠标松开时，停留
      document.onmouseup = (event)=>{
        document.onmouseup = null;
        document.onmousemove = null
      }

    }
  }
}
</script>

<style scoped>
.bigBox{
  width: 600px;
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-flow: wrap; */
  border: 2px solid #e9e9eb;
  background: #ffffff;
}
.title_close{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #BFBFBF;
}
.button_group{
  background: #BFBFBF;
}
button{
  margin-right: 20px;
}
.flow{
  /* 绝对定位 —— 浮动窗口 */
  position: absolute;
  top: 120px;
  left: 100px;
  width: 80%;

  -moz-box-shadow:3px 3px 8px 5px #c5c5c5;
  box-shadow: 3px 3px 8px 5px #c5c5c5;
}
</style>