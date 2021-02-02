<template>
  <div>
    <!-- <router-link to="/table">go Table</router-link> -->
    <!-- <Slots> -->
      <!-- 具名插槽 -->
      <!-- <p style="color:red" slot=header>在首页写入二内容</p>
      <template v-slot:header>
         <p>新写法</p> 
      </template> -->
      <!-- <template #header>
        <p>第二种新写法</p>
      </template>
      <p style="color:red" slot="main">在首页写入三内容</p>
      <p style="color:red" slot="footer">在首页写入一内容</p> -->

      <!-- 替换子组件的默认内容 -->
      <!-- <span>替换内容</span> -->

      <!-- 编译作用域 -->
      <!-- <p>{{text}}</p> -->

      <!-- 作用域插槽 -->
      <!-- 父组件使用slot-scope，user.data就是子组件传过来的值 -->
      <!-- 2.6.0之前的写法 -->
      <!-- <template slot="myUser" slot-scope="user"> 
        <ul>
          <li v-for="(item,index) in user.data" :key="index">
          {{item}}</li>
        </ul>
        <p v-for="(item,index) in user.data" :key="index">
          {{item}}
        </p>
      </template> -->
      <!-- 2.6.0之后的写法 -->
      <!-- <template v-slot:myUser="user">
        <p v-for="(item, index) in user.data" :key="index">
          {{ item }}
        </p>
      </template>
      <template slot="msg" slot-scope="message">
        <p>{{ message.Msg }}</p>
      </template> -->
    <!-- </Slots> -->
    <!-- <router-view></router-view> -->
    <!-- 组件化 -->
    <FormCom ref="myForm"
             :model="model" 
             :add-api-url='url' 
             :edit-api-url='editUrl' 
             :idKey='model.id'
             :box-title='boxTitle'
             :formType="2"
             >
        <div>
          <label for="productName">商品名称：</label>
          <input id="productName"  v-model="model.productName" />
        </div>
        <div>
          <label for="num">库存：</label>
          <input id="num"  v-model="model.num" />
        </div>
        <div>
          <label for="price">价   格：</label>
          <input id="price"  v-model="model.price" />
        </div>
    </FormCom>

    <button @click="fnNew">点我一下，新增数据</button>
    <!-- <date-list-com></date-list-com> -->
    <br>
    <!-- <input type="text" v-model="InputValue"/><button @click="handleClick">添加</button>
    <ul>
      <li-com  v-for="(item,index) in list" :key="index" :content='item' :index='index' @delete="handleItemDel"></li-com>
    </ul> -->

  <!-- props属性校验 -->
    <!-- <table>
      <tbody>
        <table-com :content="'hello world'"></table-com>
      </tbody>
    </table> -->
    <!-- 插值表达式会先到data里面找，找不到就会去computed里面找 -->
    <!-- {{fullName}}
    {{age}} -->
    <!-- {{setFullName()}} -->
    <br><br>
    <!-- class对象绑定样式：是通过对class名的true和false来决定的 -->
    <!-- <font :class="{ColorObj:isRed}">哇哇哇</font> -->
    <!-- class数组绑定样式：是通过在数组里存放class名实现 -->
    <!-- <font :class="[isRed]">哇哇哇</font> -->


    <!-- style对象绑定样式 -->
    <!-- <font :style="ColorObj">哇哇哇</font> -->
    <!-- style数组绑定样式 -->
    <font :style="[{color:'blue'},{fontSize:'30px'}]">哇哇哇</font>
    <!-- <button @click="fnClick">变变变！</button> -->

    <!-- v-if v-else -->
    <h1 v-if="ok">v-if的值</h1>
    <h1 v-else>v-else的值</h1>

    <!-- key的使用 -->
    <!-- <template v-if="user">
      <label>用户名：</label>
      <input type="text" placeholder="请输入用户名" key="user-input">
    </template>

      <template v-else>
      <label>邮箱：</label>
      <input type="text" placeholder="请输入邮箱" key="email-input">
    </template> -->

    <!-- <button @click="fnClick">切换登录方式</button> -->


   <!-- 渲染列表 -->
   <!-- <ul>
     <li v-for="(item,index) in [1,2,3,4]" :key="index">{{item}}--{{index}}</li>
   </ul>
   <ul>
     <li v-for="(item,key,index) of ObjList" :key="index">{{item}} -- {{key}}  -- {{index}}</li>
   </ul> -->


    <!-- 监听的自定义事件 -->
    <!-- 绑定原生事件 -->
   <div-com @dblclick.native="fnClickDiv"></div-com>
   

   <br><br>
    <!-- 非父子组件传值 -->
   <div-com content='zhang'></div-com>
   <div-com content='san'></div-com>

   <transition mode="in-out">
    <component :is="type"></component>
   </transition>
   <button @click='fnChange'>切换组件</button>

    <!-- 动画效果 -->
    <!-- transition包裹的内容会有一个过渡的动画效果  name可以任意的起-->
    <!-- type确定动画时长  type="transition"：将transition的时长作为动画时长 -->
    <!-- :duration=5000 自定义动画播放时长 -->
    <!-- <transition 
      name="fade"
      :duration="{enter:3000,leave:5000}"
      appear
      enter-active-class="animate__animated animate__heartBeat fade-enter-active"
      leave-active-class="animate__animated animate__bounce fade-leave-active"
      appear-active-class="animate__animated animate__bounce"
    >
      <div v-if="show">hello world</div>
    </transition>
      <button @click="changeShow">切换</button> -->


      <!-- 即将显示元素时是会触发before-enter事件 -->
      <!-- 元素显示后是会触发enter事件 -->
      <!-- 元素enter事件中的done()执行完之后会触发after-enter事件 -->
      <!-- <transition 
       name="fade"
       @before-leave="handleBeforeEnter"
       @leave="handleEnter"
       @after-leave="handleAfterEnter"
      >
      <div v-if="show">hello world</div>
    </transition>
      <button @click="changeShow">切换</button> -->


      <!-- mode="in-out" 先进入再隐藏  Out-in:先隐藏再显示-->
      <!-- <transition mode="out-in">
        <div v-if="show" key="hello">hello world</div>
        <div v-else key="bye">bye world</div>
      </transition> -->
      <fade-com :show='show'>
        <div>hello world</div>
      </fade-com>

      <fade-com :show='!show'>
        <p>哇塞 world</p>
      </fade-com>
      <button @click="changeShow">切换</button>

      <!-- vue多组件过渡 -->
      <!-- <transition-group>
        <div v-for="item in objs" :key="item.id">{{item.id}}--{{item.name}}</div>
      </transition-group>
      <button @click="fnAdd">添加成员</button> -->
  </div>
</template>

<script>
import Slots from './Slots.vue'
import FormCom from '@/components/FormCommon.vue'
import DateListCom from '@/components/DateListCom.vue'
import LiCom from '@/components/liCom.vue'
import TableCom from '../components/tableCom.vue'
import DivCom from '../components/divCom.vue'
import FadeCom from '../components/fadeCom.vue'

export default {
  components: {
    Slots,
    FormCom,
    DateListCom,
    LiCom,
    TableCom,
    DivCom,
    FadeCom
  },
  data() {
    return {
      text: '这是一个简单的故事',
       model:{
        id:null,
        productName:null,
        num:0,
        price:0.00
      },
      url:'http://localhost:8080/product',
      editUrl:'http://localhost:8080/product',
      boxTitle:"新增商品",
      InputValue:'',
      list:[],
      firstName:'san',
      lastName:'zhang',
      age:18,
      // class数组需要的属性
      isRed:'isRed',
      //class对象需要的属性
      // isRed:true
      // ColorObj:{
      //   color:'red',
      // },
      ok:true,
      user:true,
      ObjList:{
        name:'lili',
        age:18
      },
      type:'LiCom',
      show:true,
      objs:[
        {name:'zhangsan',id:'1'},
        {name:'lisi',id:'2'}
      ]
    }
  },
  created(){
    // this.getProductById()
  },
  methods:{
    fnAdd(){
      var length = this.objs.length
      length++ 
      this.objs.push({name:`新成员${length}`,id:`${length}`})
    },
    handleBeforeEnter(el){
      // el代表当前Dom元素
      el.style.color= 'red'
      console.log(el)
    },
    handleEnter(el,done){
      //el:元素；done:回调函数
      setTimeout(()=>{
        el.style.color = 'blue'
      },2000)
      setTimeout(()=>{
        done()
      },4000)
    },
    handleAfterEnter(el){
      el.style.color = 'black'
    },
    getProductById(){
      this.model = {
        id:5,
        productName:"火龙果",
        num:5,
        price:16.6
      }
      this.boxTitle = `编辑商品（${this.model.productName}）`
    },
    fnNew(){
      this.model = {},
      this.boxTitle = '新增商品',
      //????????????????????
      this.$refs.myForm.showForm()
      
    },
    //调用
    onValidate(model){
      if(model.productName == null){
        alert('请输入商品名称')
        return false
      }else{
        return true
      }
    },
    handleClick(){
      this.list.push(this.InputValue)
      this.InputValue = ''
    },
    handleItemDel(index){
      this.list.splice(index,1)
    },
    setFullName(){
      return this.lastName + " " + this.firstName
    },
    fnClick(){
      //  class数组
      // this.isRed = this.isRed === 'isRed' ? 'isBlue' : 'isRed'
      //  class对象
      // this.isRed = !this.isRed
      // this.ColorObj.color = this.ColorObj.color === 'blue' ? 'red' : 'blue'
      // 切换登录方式
      this.user = !this.user
    },
    fnClickDiv(){
      console.log('parent')
    },
    fnChange(){
      this.type = this.type === 'LiCom' ? 'TableCom' : 'LiCom'
    },
    changeShow(){
      this.show = !this.show
    }
  },
  computed:{
    //当fullName为计算属性时，不需要在date里面定义，可以直接在页面展示
    fullName:{
      //读取内容
      get:function() {
        console.log('计算了一次')
        return  this.lastName + " " +  this.firstName
      },
      set:function(value){
      // value就是要修改的值
      // split把字符串分割成数组
        var arr = value.split(' ')
        this.firstName = arr[1]
        this.lastName = arr[0]
      }
    }
  },
}
</script>

<style scoped>
.ColorObj{
  color:red
}
.isRed{
  color:red
}
.isBlue{
  color: blue;
}
/* @keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
} */
/* .v-enter,.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
  transition: opacity 1s;
} */
/* 以fade开头是因为上面的DOM的Name是fade，默认的是以v开头 */
/* .fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 3s;
} */
/* .fade-enter-active{
  transform-origin: left center;
  animation: bounce-in 1s;
}
.fade-leave-active{
  transform-origin: left center;
  animation: bounce-in 1s reverse;
} */
</style>
