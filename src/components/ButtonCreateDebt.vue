<template>
  <button
    class="btn btn-success sticky-button"
    data-bs-toggle="offcanvas"
    data-bs-target="#persons-create-offcanvas"
    aria-controls="#persons-create-offcanvas"
  >
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="persons-create-offcanvas"
    aria-labelledby="offcanvas-label"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Füge eine neue Schuld hinzu</h5>
      <button
        type="button"
        id="close-offcanvas"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Namen eingeben"
            v-model="debtorFirstName"
          />
        </div>
        <div class="mb-3">
          <label for="debt" class="form-label">Betrag</label>
          <input
            type="Number"
            class="form-control"
            id="debt"
            placeholder="Betrag eingeben"
            v-model.number="debts"
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Datum</label>
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="Bsp.: 2022-11-05"
            v-model="dateOfDebt"
          />
        </div>
        <div class="col-md-4">
          <label for="gender" class="form-label">Geschlecht</label>
          <select id="gender" class="form-select" v-model="gender">
            <option value="" selected disabled>Geschlecht wählen</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
          </select>
        </div>
        <div class="mt-5">
          <button
            class="btn btn-primary me-3"
            type="submit"
            @click="createDebt"
          >
            Hinzufügen
          </button>
          <button class="btn btn-danger" type="reset">Zurücksetzen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonCreateDebt",
  data() {
    return {
      debtorFirstName: "",
      debts: "",
      dateOfDebt: "",
      creditorId: parseInt(this.$route.params.id),
      gender: "",
    };
  },
  methods: {
    createDebt() {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + "api/v1/debts";

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const payload = JSON.stringify({
        debtorFirstName: this.debtorFirstName,
        debts: this.debts,
        dateOfDebt: this.dateOfDebt,
        creditorId: this.creditorId,
        gender: this.gender,
      });

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: payload,
        redirect: "follow",
      };

      fetch(endpoint, requestOptions).catch((error) =>
        console.log("error", error)
      );
    },
  },
};
</script>

<style scoped></style>
