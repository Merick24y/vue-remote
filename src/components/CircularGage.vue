<template>
  <ejs-circulargauge :title ='title' orientation='Horizontal'>
      <e-axes>
        <e-axis :lineStyle='lineStyle' background='rgba(0, 128, 128, 0.3)'>
                <e-pointers>
                    <e-pointer value=30></e-pointer>
                </e-pointers>
               <e-ranges>
                  <e-range start=18 end=20 startWidth=15 endWidth=15></e-range>
                  <e-range start=22 end=24 startWidth=15 endWidth=15></e-range>
                  <e-range start=26 end=28 startWidth=15 endWidth=15></e-range>
                  <e-range start=30 end=32 startWidth=15 endWidth=15></e-range>
              </e-ranges>
          </e-axis>
      </e-axes>
  </ejs-circulargauge>
</template>

<script setup>
  import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, RangesDirective as ERanges,RangesDirective as ERange, } from '@syncfusion/ej2-vue-circulargauge';
    const title = "Baridi Baridi Remote";
const lineStyle = {
    width: 30,
    color: 'blue'
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>