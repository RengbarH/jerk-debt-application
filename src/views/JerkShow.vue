<template>
  <button-go-back></button-go-back>
  <section
    v-if="jerks"
    class="destination"
    :jerks="this.jerks"
    :key="this.jerks.id"
  >
    <h1 class="hJerk">{{ jerks.firstName }} {{ jerks.lastName }}</h1>
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
      <button-jerk-delete></button-jerk-delete>
    </div>
  </section>
  <section class="experiences">
    <h2 class="h-debt-title">Die Schuldner:</h2>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="debt in debts" :key="debt.id">
          <div class="card h-100">
            <img
              :src="getAvatar(debt)"
              class="card-img-top-jerk-show"
              :alt="debt.debtorFirstName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ debt.debtorFirstName }}</h5>
              <p class="card-text">Die Schulden betragen: {{ debt.debts }} €</p>
              <p class="card-text">
                Schuldeneintrag am:
                {{ new Date(debt.dateOfDebt).getMonth() + 1 }}.{{
                  new Date(debt.dateOfDebt).getFullYear()
                }}
              </p>
              <button-debt-delete :debts="debt"></button-debt-delete>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button-create-debt></button-create-debt>
  </section>
</template>

<script>
import ButtonJerkDelete from "@/components/ButtonJerkDelete";
import ButtonCreateDebt from "@/components/ButtonCreateDebt";
import ButtonDebtDelete from "@/components/ButtonDebtDelete";
import ButtonGoBack from "@/components/ButtonGoBack";
export default {
  name: "JerkShow",
  components: {
    ButtonGoBack,
    ButtonDebtDelete,
    ButtonCreateDebt,
    ButtonJerkDelete,
  },
  data() {
    return {
      jerks: null,
      debts: [],
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

    const endpointTwo =
      process.env.VUE_APP_BACKEND_BASE_URL +
      "/api/v1/debts/" +
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

    await fetch(endpointTwo, requestOptions)
      .then(async (response) => await response.json())
      .then((debts) => {
        this.debts = debts;
      })
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped></style>
