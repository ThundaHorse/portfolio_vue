<template>
  <div id="app">
    <div class="container">
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link> 
    </div>
    <div class="wrapper">
      <transition
        name="fade"
        mode="out-in"
      >
      <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>


<script>
export default {
  
}
</script>
