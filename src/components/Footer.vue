<template>
  <div class="footer">
    <div class="left"><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio</a> by schouffy
    </div>
    <div class="right">
      Made with <span :style="{ color: heartColor }" title="Made in Silesia, Poland">{{ heart }}</span>
      by <a href="https://github.com/blazejhanzel" target="_blank">Błażej Hanzel</a>, &copy; {{ currentYear }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Footer",
    data() {
        return {
            heart: "💙",
            heartColor: "#007aff",
        };
    },
    mounted() {
        setInterval(() => {
            this.heart = this.heart === "💙" ? "💛" : "💙";
            this.heartColor = this.heart === "💙" ? "#007aff" : "#ffcc00";
        }, 1000);
    },
    computed: {
        currentYear() {
            const currentYear = new Date().getFullYear();
            return currentYear > 2023 ? `2023-${currentYear}` : "2023";
        },
    },
});
</script>

<style scoped lang="less">
@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left,
.right {
  padding-top: 10px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .footer {
    padding: 0;
  }

  .left,
  .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }
}
</style>
