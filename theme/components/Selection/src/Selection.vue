<template>
    <div class="selection-box">
        <el-alert type="info" show-icon :closable="false">
            <template #title>
                <div>
                    <label class="selection-text">已选择:&nbsp;<span class="selection-text-number">{{ number }}</span></label>
                    <el-button v-show="number" type="primary" link @click="clearEmpty" style="margin-left: 24px;height: 20px;">清空</el-button>
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
            this.$emit('clearEmpty')
        }
    }
}
</script>

<style lang='scss'>
.selection-box {
    margin-bottom: 16px;
    border: 1px solid #91d5ff;

    .el-alert--info.is-light {
        background: #e6f7ff;
        color: #1890ff;
    }

    .selection-text {
        margin-right: 12px;
        position: relative;
        top: 1px;
    }

    .el-alert__title {
        display: block;
        font-size: 14px;
        color: rgba(0, 0, 0, .85);
    }

    .selection-text-number {
        color: #1890FF;
        font-weight: 500;
    }
}
</style>