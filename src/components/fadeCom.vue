<template>
  <div>
    <transition
      @before-enter="handleBeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
    >
      <slot v-if="show"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  props:{
    show:''
  },
  methods:{
    handleBeforeEnter(el){
      el.style.color = 'red'
    },
    handleEnter(el,done){
      setTimeout(()=>{
        el.style.fontSize = '30px'
        done()
      },2000)
    },
    handleAfterEnter(el){
      el.style.color = 'yellow'
    }
  }
}
</script>

<style>

</style>