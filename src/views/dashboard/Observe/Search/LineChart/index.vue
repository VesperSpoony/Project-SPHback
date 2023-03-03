<template>
  <div>
    <div class="header">
      <span>搜索用户数</span>
      <svg
        t="1677840979611"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2765"
        width="20"
        height="20"
      >
        <path
          d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"
          fill="#000000"
          p-id="2766"
        ></path>
      </svg>
    </div>
    <div class="main">
      <span class="main-title">12321</span>
      <span class="main-content">17.1</span>
      <svg
        t="1677841780268"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4620"
        width="16"
        height="16"
      >
        <path
          d="M512 0l341.333333 349.354667-273.066666-0.085334V1024H443.733333V349.269333H170.666667L512 0z"
          fill="#EA4524"
          p-id="4621"
        ></path>
      </svg>
      <svg
        t="1677841868514"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5831"
        width="16"
        height="16"
      >
        <path
          d="M512 1024L170.666667 674.645333l273.066666 0.085334V0h136.533334v674.730667H853.333333L512 1024z"
          fill="#00FFC3"
          p-id="5832"
        ></path>
      </svg>
    </div>
    <div class="footer">
      <div class="charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "LineChart",
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
          type: "line",
          data: [10, 7, 33, 12, 48, 9, 29, 10],
          // 拐点样式设置
          itemStyle: {
            opacity: 0,
          },
          // 线条样式设置
          lineStyle: {
            color: "blue",
          },
          // 填充颜色设置
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "blue", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "white", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          smooth: true,
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    });
  },
};
</script>

<style  scoped>
/* .header {
  display: flex;
  align-items: center;
} */
.search-header {
  margin-right: 20px;
}
.main {
  margin: 10px 0px;
}
.main-title {
  margin-right: 30px;
}
.main-content {
  margin-right: 10px;
}
.charts {
  width: 100%;
  height: 50px;
}
</style>