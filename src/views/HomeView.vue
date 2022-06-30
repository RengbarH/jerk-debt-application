<template>
  <div class="home">
    <h1>The latest jerks</h1>
    <div class="destinations">
      <router-link v-for="jerk in jerks" :key="jerk.id" :to="jerk.identifier">
        <h2>{{ jerk.firstName }} {{ jerk.lastName }}</h2>
        <img
          :src="getAvatar(jerk)"
          :alt="jerk.firstName + ' ' + jerk.lastName"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "JerkView",
  data() {
    return {
      jerks: [],
    };
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
  mounted() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/creditor", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((jerk) => {
          this.jerks.push(jerk);
        })
      )
      .catch((error) => console.log("error", error));
  },
};
</script>
