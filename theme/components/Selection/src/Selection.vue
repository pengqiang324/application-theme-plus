<template>
    <div class="selection-box">
        <el-alert type="info" show-icon :closable="false">
            <template #title>
                <div>
                    <label class="selection-text"
                        >已选择:&nbsp;<span class="selection-text-number">{{
                            number
                        }}</span></label
                    >
                    <el-button
                        v-show="number"
                        type="primary"
                        link
                        @click="clearEmpty"
                        style="height: 20px; margin-left: 24px"
                        >清空</el-button
                    >
                </div>
            </template>
        </el-alert>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Selection',
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    methods: {
        clearEmpty() {
            this.$emit('clearEmpty');
        }
    }
};
</script>

<style lang="scss">
.selection-box {
    margin-bottom: 16px;
    border: 1px solid #91d5ff;

    .el-alert--info.is-light {
        color: #1890ff;
        background: #e6f7ff;
    }

    .selection-text {
        position: relative;
        top: 1px;
        margin-right: 12px;
    }

    .el-alert__title {
        display: block;
        font-size: 14px;
        color: rgb(0 0 0 / 85%);
    }

    .selection-text-number {
        font-weight: 500;
        color: #1890ff;
    }
}
</style>
