<template>
  <div class="Lis">
     <li @click="handleClick()">{{content}}</li>
  </div>
</template>

<script>
export default {
  name:'LiCom',
  props:{
    content:'',
    index:''
  },
  methods:{
    handleClick(){
      this.$emit('delete',this.index)
    }
  }
}
</script>

<style scoped>
</style>