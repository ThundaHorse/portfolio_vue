<template>
  <div class="about">
    <section v-scroll-reveal.reset>
      <h1>This is an about page</h1>
      fjdsjfdksljflksdjlkfs
    </section>
    <section>
      <h1>Scroll down!</h1>
    </section>
 
    <!-- This section will reveal itself each time it's scrolled into view -->
    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>
 
    <!-- Element-specific configuration options can be passed like this -->
    <section v-scroll-reveal.reset="{ delay: 250 }">
      <h1>Slightly late tada!</h1>
    </section>
  </div>
</template>

<style>
  section {
    height: 100vh;
  }
</style>
