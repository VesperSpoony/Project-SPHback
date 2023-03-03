<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BarChart",
  mounted() {
    let lineChart = echarts.init(this.$refs.charts);
    lineChart.setOption({
      xAxis: {
        show: false,
        type: "category",
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [10, 7, 33, 12, 48, 88, 29, 10, 44, 7, 20],
          color: "cyan",
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {},
    });
  },
};
</script>

<style  scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>