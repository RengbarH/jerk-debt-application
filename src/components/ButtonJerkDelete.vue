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
  name: "ButtonJerkDelete",
  data() {
    return { jerks: null, deleted: false };
  },
  emits: ["deleted"],
  methods: {
    deleteVictim() {
      console.log(this.id);

      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL +
        "/api/v1/creditor/" +
        this.$route.params.id;

      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(endpoint, requestOptions)
        .then(() => this.$emit("deleted"))
        .catch((error) => console.log("error", error));
    },
    startFunc() {
      this.deleted = true;
      this.deleteVictim();
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
