<template>
    <div class="slider-container">
      <h3>Fan Speed</h3>
      <v-slider
        v-model="selectedSpeed"
        :min="0"
        :max="4"
        :step="1"
        :ticks="true"
        tick-size="4"
        show-ticks="always"
        color="blue"
        class="custom-slider"
      ></v-slider>
      <div class="labels">
        <span v-for="(label, index) in labels" :key="index">{{ label }}</span>
      </div>
    </div>
  </template>
  
  <script>
import { VSlider } from "vuetify/components";

export default {
  name: "FanSpeedSlider",
  components: { VSlider }, // Register VSlider locally
  data() {
    return {
      selectedSpeed: 2, // Default selected speed
      labels: ["Auto", "Quiet", "Low", "Medium", "High"],
    };
  },
};
</script> 

  <style scoped>
  .slider-container {
    text-align: center;
    width: 40%;
    margin: 0 auto;
  }
  .labels {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 5px;
  }
  .custom-slider {
    margin: 10px 0;
  }
  </style>
  