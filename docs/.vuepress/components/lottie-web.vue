<template>
  <div class="lottie-wrap"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector(".lottie-wrap"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "../../animate_02.json"
    });
  }
};
</script>

<style scoped>
.lottie-wrap {
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
}
</style>