<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ProgressChart",
  mounted() {
    let lineChart = echarts.init(this.$refs.charts);
    lineChart.setOption({
      xAxis: {
        show: false,
        // 最小值与最大值设置
        min: 0,
        max: 100,
      },
      yAxis: {
        show: false,
        type: "category",
      },
      series: [
        {
          type: "bar",
          data: [78],
          color: "yellowgreen",
          // 柱状图宽度
          barWidth: 10,
          // 背景颜色
          showBackground: true,
          backgroundStyle: {
            color: "#eee",
          },
          // 文本
          label: {
            show: true,
            formatter: "|",
            position: "right",
          },
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