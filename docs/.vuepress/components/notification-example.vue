<template>
  <div>
    <button @click="showNotification">显示通知</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: null,
      count: 0
    };
  },
  methods: {
    showNotification() {
      if (Notification.permission === "granted") {
        this.count++;
        let notification = new Notification(
          "测试 Notification 标题: " + this.count,
          {
            body: "测试 Notification body",
            icon: "../../demo_01.png"
          }
        );
        notification.onclick = () => {
          notification.close();
        };
      }
    },
    initNotification() {
      if (window.Notification && Notification.permission !== "granted") {
        Notification.requestPermission(permission => {
          if (permission === "granted") {
          }
        });
      }
    }
  },
  created() {
    this.initNotification();
  }
};
</script>

<style>
</style>