<template>
    <el-row class="pagination-box">
        <span v-if="!hideTotal && total" class="pagination-number"
            >{{ (current - 1) * pageSize + 1 }}-{{
                current * pageSize > total ? total : current * pageSize
            }}</span
        >
        <slot
            :sizes="[10, 20, 30, 40]"
            layout="total, prev, pager, next, sizes"
        ></slot>
    </el-row>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Pagination',

    props: {
        current: Number,
        pageSize: Number,
        total: Number,
        hideTotal: Boolean
    }
};
</script>

<style lang="scss">
.pagination-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .pagination-number {
        display: block;
        margin-right: 2px;
        font-size: 13px;
        line-height: 28px;
        color: #606266;
    }
}
</style>
