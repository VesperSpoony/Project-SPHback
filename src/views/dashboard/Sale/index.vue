<template>
  <div class="sale">
    <el-card class="box-card" style="margin: 10px, 0">
      <div slot="header" class="clearfix">
        <!-- header左侧 -->
        <!-- @tab-click="handleClick" -->
        <el-tabs class="tab" v-model="activeName">
          <el-tab-pane label="销售额" name="sale"></el-tab-pane>
          <el-tab-pane label="访问量" name="visite"></el-tab-pane>
        </el-tabs>
        <!-- header右侧 -->
        <div class="right">
          <span @click="setDay">今日</span>
          <span @click="setWeek">本周</span>
          <span @click="setMonth">本月</span>
          <span @click="setYear">本年</span>
          <el-date-picker
            v-model="date"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            class="date"
          >
          </el-date-picker>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="16">
            <div class="charts" ref="charts"></div>
          </el-col>
          <el-col :span="8" right2>
            <h3>门店{{ title }}排名</h3>
            <ul>
              <li>
                <span class="rindex">1</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex">2</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex">3</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex2">4</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex2">5</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex2">6</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
              <li>
                <span class="rindex2">7</span>
                <span>肯德基</span>
                <span class="rvalue">123456</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
import dayjs from "dayjs";
import { mapState } from "vuex";
export default {
  name: "Sale",
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      date: [],
    };
  },
  methods: {
    setDay() {
      const day = dayjs().format("YYYY-MM-DD");
      this.date = [day, day];
    },
    setWeek() {
      const start = dayjs().day(1).format("YYYY-MM-DD");
      const end = dayjs().day(7).format("YYYY-MM-DD");
      this.date = [start, end];
    },
    setMonth() {
      const start = dayjs().startOf("month").format("YYYY-MM-DD");
      const end = dayjs().endOf("month").format("YYYY-MM-DD");
      this.date = [start, end];
    },
    setYear() {
      const start = dayjs().startOf("year").format("YYYY-MM-DD");
      const end = dayjs().endOf("year").format("YYYY-MM-DD");
      this.date = [start, end];
    },
  },
  mounted() {
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: this.title + "趋势",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [],
          color: "skyblue",
        },
      ],
    });
  },
  computed: {
    title() {
      return this.activeName == "sale" ? "销售额" : "访问量";
    },
    ...mapState({
      listState: (state) => state.home.list,
    }),
  },
  watch: {
    title() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        xAxis: {
          data:
            this.title == "销售额"
              ? this.listState.orderFullYearAxis
              : this.listState.userFullYearAxis,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data:
              this.title == "销售额"
                ? this.listState.orderFullYear
                : this.listState.userFullYear,
            color: "skyblue",
          },
        ],
      });
    },
    listState() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.listState.orderFullYearAxis,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "60%",
            data: this.listState.orderFullYear,
            color: "skyblue",
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.sale {
  margin-top: 10px;
}
.clearfix {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.date {
  width: 250px;
  margin: 0 20px;
}
.right span {
  margin: 0 10px;
}
.charts {
  width: 100%;
  height: 300px;
}
.right2 {
  padding: 0px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0;
}
ul li {
  height: 8%;
  margin: 10px 0;
}
.rindex {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
  color: white;
  text-align: center;
  float: left;
  margin-right: 50px;
}
.rindex2 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  float: left;
  margin-right: 50px;
}
.rvalue {
  float: right;
}
</style>