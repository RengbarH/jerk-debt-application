<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: { TheNavigation },
};
</script>

<style></style>
