<template>
  <div>
    子组件包含三个插槽
    <!-- 具名插槽，header、footer、main -->
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
    <!-- 父组件没有写入内容时，会显示子组件的默认内容，父组件有内容时，则会替换子组件的默认内容 -->
    <!-- <slot>默认内容</slot> -->
    <!-- 编译作用域 -->
    <!-- <slot></slot> -->
    <!-- 作用域插槽 -->
    <!-- 子组件使用:data绑定需要的值 -->
    <slot  name="myUser" :data="user"></slot>
      <!-- :名字，这个名字起什么都行 -->
    <!-- <slot name="msg" :Msg='message()'></slot> -->
  </div>
</template>

<script>
export default {
  // name:'slotTwo',
  data(){
    return {
      user:[
        {name:'jack',age:18},
        {name:'tom',age:19},
        {name:'jerry',age:20}
      ],
      message:function(){
        return 'hello world'
      }
    }
  },
}
</script>

<style>

</style>