<template>
  <section
    v-if="jerks"
    class="destination"
    :jerks="this.jerks"
    :key="this.jerks.id"
  >
    <h1>{{ jerks.firstName }} {{ jerks.lastName }}</h1>
    <div class="destination-details">
      <img
        :src="getAvatar(jerks)"
        :alt="jerks.firstName + ' ' + jerks.lastName"
      />
      <p>
        {{ jerks.firstName }} {{ jerks.lastName }} gehört zu den Verlierern
        dieser Gesellschaft. Warum?
        {{ jerks.gender === "MALE" ? "Er" : "Sie" }} hat es geschafft, gewissen
        Leuten "etwas Geld" auszuleihen (genauer gesagt:
        {{ jerks.debtors.length }} Personen) und wartet seitdem vergebens auf
        die Rückzahlung. Das kann dauern.... Damit
        {{ jerks.gender === "MALE" ? "er" : "sie" }} die Schuldentilgung nicht
        vergisst, hat {{ jerks.gender === "MALE" ? "er" : "sie" }} in dieser App
        {{ jerks.gender === "MALE" ? "sein" : "ihr" }} Gesicht verewigt und die
        Schulden festgehalten
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "JerkShow",
  data() {
    return {
      jerks: null,
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
  async created() {
    const endpoint =
      process.env.VUE_APP_BACKEND_BASE_URL +
      "/api/v1/creditor/" +
      this.$route.params.id;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(endpoint, requestOptions)
      .then(async (response) => await response.json())
      .then((jerks) => {
        this.jerks = jerks;
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped></style>
