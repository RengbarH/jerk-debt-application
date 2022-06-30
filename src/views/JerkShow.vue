<template>
  <div>
    <div :jerks="this.jerks" :key="this.jerks.id">
      <h2>{{ jerks.firstName }} {{ jerks.lastName }}</h2>
      <img
        :src="getAvatar(jerks)"
        :alt="jerks.firstName + ' ' + jerks.lastName"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "JerkShow",
  data() {
    return {
      jerks: {},
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
    // jerkId() {
    //   return parseInt(this.$route.params.id);
    // },
    // singleJerk() {
    //   return {
    //     for
    //   }
    // },
  },
  created() {
    const endpoint =
      process.env.VUE_APP_BACKEND_BASE_URL +
      "/api/v1/creditor/" +
      this.$route.params.id;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((jerks) => {
        this.jerks = jerks;
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped></style>
