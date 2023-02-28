<template>
  <a :title="title">
    <el-button
      v-bind="$attrs"
      v-on="$listeners"
      style="margin: 10px"
    ></el-button>
  </a>
</template>

<script>
export default {
  name: "HintButton",
  props: ["title"],
};
</script>

<style>
</style>