<template>
  <div class="home">
    <jerk-single :jerks="this.jerks"></jerk-single>
  </div>
  <div>
    <button-create-jerk></button-create-jerk>
  </div>
</template>

<script>
import JerkSingle from "@/components/JerkSingle";
import ButtonCreateJerk from "@/components/ButtonCreateJerk";
export default {
  name: "JerkView",
  components: { ButtonCreateJerk, JerkSingle },
  data() {
    return {
      jerks: [],
    };
  },
  async created() {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/creditor";

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    this.jerks = [];
    await fetch(endpoint, requestOptions)
      .then(async (response) => await response.json())
      .then((result) =>
        result.forEach((jerk) => {
          this.jerks.push(jerk);
        })
      )
      .catch((error) => console.log("error", error));
  },
};
</script>
