<template>
  <div id="liveAlertPlaceholder"></div>
  <button
    type="button"
    class="btn btn-primary"
    id="liveAlertBtn"
    :to="{ name: 'home' }"
    @click="mounted"
  >
    <i class="bi bi-trash3"></i>
  </button>
  <!--  <button-->
  <!--    type="submit"-->
  <!--    class="btn btn-primary"-->
  <!--    :to="{ name: 'home' }"-->
  <!--    @click="deleteVictim"-->
  <!--  >-->
  <!--    <i class="bi bi-trash3"></i>-->
  <!--  </button>-->
</template>

<script>
export default {
  name: "ButtonJerkDelete",
  data() {
    return { jerks: null };
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
    alertMessage() {
      const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
      const alertTrigger = document.getElementById("liveAlertBtn");

      function alert(message, type) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML =
          '<div class="alert alert-' +
          type +
          ' alert-dismissible" role="alert">' +
          message +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        alertPlaceholder.append(wrapper);
      }

      if (alertTrigger) {
        alertTrigger.addEventListener("click", function () {
          alert("Nice! Die Person wurde erfolgreich gelöscht", "success");
        });
      }
    },
    mounted() {
      this.alertMessage();
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
</style>
