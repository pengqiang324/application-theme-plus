<template>
  <el-col :span="spanCol" class="search-controller-box">
    <el-form-item class="search-form-item">
      <slot></slot>
      <el-button
        v-if="isOpen"
        type="primary"
        text
        :bg="false"
        class="search-controller-tool"
        @click="handleOpen"
      >
        {{ toolText }}
        <el-icon v-if="!needOpenStatus" style="margin-left: 4px">
          <ArrowDown />
        </el-icon>
        <el-icon v-else style="margin-left: 4px">
          <ArrowUp />
        </el-icon>
      </el-button>
    </el-form-item>
  </el-col>
</template>

<script>
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";
export default {
  name: "SearchController",

  props: {
    index: {
      type: Number,
      default: 0,
    },

    refresh: {
      type: [Boolean, Number],
      default: false,
    },
  },

  components: {
    ArrowDown,
    ArrowUp,
  },

  data() {
    return {
      spanCol: 8,
      toolText: "展开",
      isOpen: false,
      needOpenStatus: false,
      key: Math.random() * 1000,
    };
  },

  watch: {
    // 手动刷新
    refresh(val) {
      if (val) {
        this.needOpenStatus = this.expand ? false : true;
        this.setDisplay(this.inputList, "block");
        this.computeCol();
        this.handleOpen();
      }
    },
  },

  created() {
    this.initData();
  },

  mounted() {
    this.computeCol();
  },

  methods: {
    initData() {
      if (this.expand) {
        // 默认展开 expand 由 全局 app.config.globalProperties 挂载属性
        this.spanCol = 24;
        this.toolText = "收起";
        this.needOpenStatus = true;
      }
    },

    computeCol() {
      // 延迟加载，保证dom渲染成功
      setTimeout(() => {
        const oBox = document.querySelectorAll(".search-box")[this.index];
        const oCol = oBox.querySelectorAll(".el-col");
        this.parentDOM = oBox.querySelector(".el-row");
        this.inputList = oCol;
        if (oCol.length >= 4) {
          this.isOpen = true;
          this.setDisplay(oCol, this.expand ? "block" : "none");
        } else {
          this.isOpen = false;
        }
      }, 500);
    },
    handleOpen() {
      if (this.needOpenStatus) {
        this.needOpenStatus = false;
        this.toolText = "展开";
        this.spanCol = 8;
        this.setDisplay();
      } else {
        this.needOpenStatus = true;
        this.toolText = "收起";
        this.spanCol = 24;
        this.setDisplay(this.inputList, "block");
      }
    },

    setDisplay(DOMList = this.inputList, diaplayType = "none") {
      DOMList.forEach((item, i) => {
        if (i > 1 && i < DOMList.length - 1) {
          item.style.display = diaplayType;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.search-controller-box {
  .search-controller-tool {
    margin-left: 8px;
  }

  .search-controller-icon {
    position: relative;
    top: 1px;
    left: 2px;
    font-size: 18px;
  }

  &.el-col-24 {
    .search-form-item {
      .el-form-item__content {
        justify-content: flex-end;
      }
    }
  }
}
</style>
