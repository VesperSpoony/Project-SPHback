<template>
  <div>
    <el-card style="margin: 20px 0">
      <CategorySelect
        @getCategoryId="getCategoryId"
        :show="scene != 0"
      ></CategorySelect>
    </el-card>
    <!-- 三部分进行切换 -->
    <el-card>
      <!-- 展示Spu列表结构 -->
      <div v-show="scene == 0">
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="margin: 10px 0"
          :disabled="!category3Id"
          @click="addSpu"
        >
          添加Spu
        </el-button>
        <el-table border style="width: 100%" :data="records">
          <el-table-column
            type="index"
            label="序号"
            width="80px"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="spuName" label="SPU名称" width="width">
          </el-table-column>
          <el-table-column prop="description" label="SPU描述" width="width">
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="width">
            <template slot-scope="{ row, $index }">
              <HintButton
                type="success"
                icon="el-icon-plus"
                size="mini"
                title="添加Spu"
                @click=""
              ></HintButton>
              <HintButton
                type="warning"
                icon="el-icon-edit"
                size="mini"
                title="修改Spu"
                @click="updateSpu(row)"
              ></HintButton>
              <HintButton
                type="info"
                icon="el-icon-info"
                size="mini"
                title="查看当前Spu全部Sku"
                @click=""
              ></HintButton>
              <HintButton
                type="danger"
                icon="el-icon-delete"
                size="mini"
                title="删除Spu"
                @click=""
              ></HintButton>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center"
          :current-page="page"
          :page-sizes="[3, 5, 10]"
          :page-size="limit"
          layout="prev, pager, next, jumper, ->, total, sizes"
          :total="total"
          @current-change="getSpuList"
          @size-change="sizeChange"
        >
        </el-pagination>
      </div>
      <!-- 添加/修改Spu -->
      <SpuForm
        v-show="scene == 1"
        @changeScene="changeScene"
        ref="spu"
      ></SpuForm>
      <!-- 添加Sku -->
      <SkuForm v-show="scene == 2"></SkuForm>
    </el-card>
  </div>
</template>

<script>
import SpuForm from "./SpuForm";
import SkuForm from "./SkuForm";
export default {
  name: "Spu",
  components: {
    SpuForm,
    SkuForm,
  },
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      show: true,
      page: 1,
      limit: 3,
      records: [],
      total: 0,
      scene: 0, // 场景：0展示SPU列表数据 1添加/修改SPU 2添加SKU
    };
  },
  methods: {
    getCategoryId(categoryId) {
      const { category1Id, category2Id, category3Id } = categoryId;
      this.category1Id = category1Id;
      this.category2Id = category2Id;
      this.category3Id = category3Id;
      this.getSpuList();
    },

    // 获取Spu列表数据
    async getSpuList(pages = 1) {
      this.page = pages;
      const { page, limit, category3Id } = this;
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },

    // 改变分页器每页显示数量
    sizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },

    addSpu() {
      this.scene = 1;
    },

    updateSpu(row) {
      this.scene = 1;
      this.$refs.spu.initSpuData(row);
    },

    changeScene(scene) {
      this.scene = scene;
    },
  },
};
</script>

<style>
</style>