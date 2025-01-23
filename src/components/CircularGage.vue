<template>
  <ejs-circulargauge  enablePointerDrag='true' height='250px' width='250px'>
      <e-axes>
        <e-axis minimum=18 maximum=30 :lineStyle='lineStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' background='rgb(255, 255, 255)'>
                <e-pointers>
                  <e-pointer value=100 :border='border' type='Marker' markerWidth=15 markerHeight=15
                  markerShape='Circle' radius='100%' color='white'></e-pointer>
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
    width: 40,
    color: 'blue'
}
const border = {
    color: '#FFFFFF',
    width: 20
}
const majorTicks = {
    interval: 2,
    height: 10,
    width: 3
}
const minorTicks = {
    interval: 1,
    height: 5,
    width: 2
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ededed;
  margin-top: 60px;
}
</style>