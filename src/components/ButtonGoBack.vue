<template>
  <span class="go-back">
    <button @click="$router.back()">
      <i class="bi bi-arrow-left"></i>
    </button>
  </span>
</template>

<script>
export default {
  name: "ButtonGoBack",
};
</script>

<style scoped></style>
