<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px"
      >添加</el-button
    >
    <el-table style="width: 100%" border>
      <el-table-column
        prop="prop"
        label="序号"
        width="80px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="prop"
        label="品牌名称"
        width="width"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="prop"
        label="品牌logo"
        width="width"
        align="center"
      ></el-table-column>
      <el-table-column prop="prop" label="操作" width="width"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      :total="99"
      :current-page="6"
      :page-size="3"
      :page-sizes="[3, 5, 10]"
      :pager-count="5"
      layout="prev, pager, next, jumper, ->, sizes, total"
      style="margin-top: 20px; text-align: center"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "TradeMark",
};
</script>

<style>
</style>