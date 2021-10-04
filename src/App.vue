<template>
  <div class="container">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigatin.vue";
export default {
  components: { Navigation },
  name: "App",
};
</script>

<style></style>
