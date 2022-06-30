<template>
  <nav>
    <div id="nav">
      <router-link id="logo" to="/">Who's the jerk?</router-link>
      <router-link to="/jerk">Jerk</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>
