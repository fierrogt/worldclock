
"use strict";
 
new Vue({
  el: "#app",
  data: {
    message: "Current Time:",
    currentTime: null
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("LTS");
    }
 
  },
 
  created() {
    this.currentTime = moment().format("LTS");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
 
});
