<template>
    <div class="empty">
        <Empty class="empty-icon" />
        <p class="empty-text">暂无数据</p>
    </div>
</template>

<script>
import Empty from '../../Empty';
export default {
    name: 'DefaultEmpty',
    components: {
        Empty
    }
};
</script>

<style lang="scss">
.empty {
    margin: 48px 0;
    font-size: 14px;
    line-height: 22px;
    text-align: center;

    .empty-text {
        color: rgb(0 0 0 / 25%);
    }
}
</style>
