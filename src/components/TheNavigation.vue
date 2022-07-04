<template>
  <nav>
    <div id="nav">
      <router-link id="logo" to="/"
        ><i class="bi bi-bank2"></i> Who's the jerk?
      </router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>
