<template>
  <div class="box">
    <div class="wrap">
      <template v-for="(item,index) in list">
        <div class="item" :key="item" :id="index" :style="{left: index*45 + 'px'}">{{item}}</div>
      </template>
    </div>
    <button :disabled="type" @click="begin">演示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      type: false
    };
  },
  methods: {
    initlist() {
      for (let i = 0; i < 10; i++) {
        this.list.push(Math.floor(Math.random() * 200));
      }
    },
    sort() {
      const arr = this.list;
      const len = arr.length;
      let time = 1;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setTimeout(() => {
              const x = document.getElementById(j);
              const y = document.getElementById(j + 1);
              document.querySelectorAll(".item").forEach(item => {
                item.classList.remove("select");
              });
              x.classList.add("select");
              y.classList.add("select");
              [x.style.left, y.style.left] = [y.style.left, x.style.left];
              [x.id, y.id] = [y.id, x.id];
            }, time * 1000);
            time++;
          }
        }
      }
    },
    begin() {
      this.sort();
    }
  },
  created() {
    this.initlist();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
}
.wrap {
  width: 100%;
  height: 50px;
  position: relative;
}
.item {
  position: absolute;
  width: 35px;
  height: 35px;
  font-size: 12px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 2px solid #333;
  line-height: 32px;
  text-align: center;
  transition: 1s;
}
.item.select {
  border-color: blueviolet;
}
</style>