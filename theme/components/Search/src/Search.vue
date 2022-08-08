<template>
    <div ref="searchBox" v-if="show" class="search-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Search",

    data() {
        return {
            show: true
        }
    },

    activated() {
        this.show = true
    },

    deactivated() {
        setTimeout(() => {
            this.show = false
        }, 280)
    }
};
</script>

<style lang="scss">


.search-box {
    margin-bottom: 10px !important;
    padding: 24px 0 0 !important;
    background: #fff !important;

    .el-date-editor--datetimerange.el-input,
    .el-date-editor--daterange.el-input__inner,
    .el-date-editor--datetimerange.el-input__inner {
        width: 100%;
    }

    .el-select {
        display: block;
        width: 100%;
    }

    .el-select__caret {
        line-height: 40px;
    }

    .el-range__close-icon {
        line-height: 24px;
    }

    .el-cascader {
        display: block;
    }

    [class*=el-col-] {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>
