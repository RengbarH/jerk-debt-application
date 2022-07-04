<template>
  <div class="destinations">
    <router-link
      v-for="jerk in jerks"
      :key="jerk.id"
      :to="{ name: 'destination.show', params: { id: jerk.id } }"
    >
      <h4 class="h-jerk-single">{{ jerk.firstName }} {{ jerk.lastName }}</h4>
      <img
        class="home img"
        :src="getAvatar(jerk)"
        :alt="jerk.firstName + ' ' + jerk.lastName"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "JerkSingle",
  props: {
    jerks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getAvatar(debt) {
      if (debt.gender === "MALE") {
        return require("../assets/man.png");
      } else if (debt.gender === "FEMALE") {
        return require("../assets/woman.png");
      } else if (debt.gender === "DIVERSE") {
        return require("../assets/diverse.png");
      }
    },
  },
};
</script>

<style scoped></style>
