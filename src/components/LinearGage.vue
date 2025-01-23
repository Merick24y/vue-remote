<template>
    <div class="text-caption">

<v-slider>
  :max="3"
  :ticks="tickLabels"
  show-ticks="always"
  step="1"
  tick-size="4"
 </v-slider>
 
</div>
</template>

<script>
  export default {
    data() {
      return {
        tickLabels: {
          0: 'Figs',
          1: 'Lemon',
          2: 'Pear',
          3: 'Apple',
        },
      }
    },
  }
</script>