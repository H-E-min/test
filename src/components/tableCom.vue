<template>
    <tr>
      <td>{{content}}</td>
    </tr>
</template>

<script>
export default {
  name:'tableCom',
  props:{
    content:{
      type:[String,Number],
      default:'default value',
      // value就是传入的内容,且长度必须大于5
      validator:function(value) {
          return (value.length > 5) 
      }
    }
  }
}
</script>

<style>

</style>