<template>
  <div id="liveAlertPlaceholder"></div>
  <button
    v-if="!deleted"
    type="button"
    class="btn btn-primary"
    id="liveAlertBtn"
    @click="startFunc"
  >
    <i class="bi bi-trash3"></i>
  </button>
  <button v-else type="button" class="btn btn-primaryOk" id="liveAlertBtn">
    <i class="bi bi-check-circle-fill"></i>
  </button>
</template>

<script>
export default {
  name: "ButtonDebtDelete",
  props: {
    debts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { deleted: false };
  },
  emits: ["deleted"],
  methods: {
    async deleteDebt() {
      console.log(this.id);

      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/debts/" + this.debts.id;

      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(endpoint, requestOptions)
        .then(async () => await this.$emit("deleted"))
        .catch((error) => console.log("error", error));
    },
    startFunc() {
      this.deleted = true;
      this.deleteDebt();
    },
  },
};
</script>

<style scoped>
.btn-primary {
  /*margin: auto;*/
  /*display: block;*/
  background-color: red;
  border-color: red;
}

.btn-primaryOk {
  background-color: green;
}
.bi-check-circle-fill {
  color: white;
}
.btn-primary:hover {
  background-color: #6b0000;
}
</style>
