<template>
  <div id="home">
    <!-- height: {{ window.height }}
    width: {{ window.width }}-->
    <div v-if="window.width > 850 || window.height > 1000">
      <NonMobileViewing></NonMobileViewing>
      <!-- <Formatted /> -->
      <!-- <Footer /> -->
    </div>
    <div v-else>
      <MobileMin></MobileMin>
      <!-- <Formatted /> -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<style>
</style>

<script>
import NonMobileViewing from "../components/NonMobileViewing";
// import MobileViewing from '../components/MobileViewing';
import MobileMin from "../components/MobileMin";
// import Footer from "../components/Footer";
// import Formatted from "../components/Formatted";

export default {
  name: "Home",
  components: {
    NonMobileViewing,
    // Footer,
    // Formatted
    // MobileViewing,
    MobileMin
  },
  data: function() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
};
</script>