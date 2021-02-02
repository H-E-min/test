<template>
<!-- 监听的原生事件 -->
  <div @click="handleChild">
    {{selfcontent}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      selfcontent:this.content
    }
  },
  props:{
    content:{
      type:String
    }
  },
  methods:{
    handleChild(){
      console.log(this.selfcontent)
      this.$EventBus.$emit('change',this.selfcontent)
    },
 },
 //需要在生命周期 mounted 钩子函数里监听来自bus的事件change
  mounted(){
    var this_ = this
    this.$EventBus.$on('change',function(msg){
      this_.selfcontent = msg
    })
  },
  beforeDestroy () {
    console.log('销毁监听事件')
    this.$EventBus.$off('change')
  }
}
</script>

<style>

</style>