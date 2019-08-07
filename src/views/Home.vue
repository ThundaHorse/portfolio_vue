<template>
  <div class="home">
    <div class="hidden-sm-and-down">
      <NonMobileViewing></NonMobileViewing>
    </div>

    <div class="hidden-sm-and-up">
      <MobileViewing></MobileViewing>
    </div>
  </div>
</template>

<style>
 
</style>

<script>
import NonMobileViewing from '../components/NonMobileViewing';
import MobileViewing from '../components/MobileViewing';

export default {
  components: {
    NonMobileViewing,
    MobileViewing
  },
  data: function() {
    
  },
  created: function() {
   
  },
  methods: {
    
  }
};
</script>