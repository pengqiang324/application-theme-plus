<template>
    <div class="tool-box">
        <slot></slot>
        <div class="tool-right">
            <slot name="tool"></slot>
            <div class="tool-icon">
                <el-tooltip effect="dark" content="刷新" :placement="placement">
                    <el-icon @click="refreshData" size="20px" color="#333" class="custom-tooltip">
                        <RefreshRight />
                    </el-icon>
                </el-tooltip>
                <el-tooltip v-if="showRefresh" effect="dark" content="应用管理" :placement="placement">
                    <el-dropdown placement="bottom" @command="handleCommand" trigger="click">
                        <el-icon size="20px" color="#333" class="custom-tooltip">
                            <Monitor />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="refresh">刷新应用</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-tooltip>
                <el-tooltip v-if="showInfo" effect="dark" :placement="placement">
                    <el-icon size="20px" color="#333" class="custom-tooltip">
                        <QuestionFilled />
                    </el-icon>
                    <template #content>
                        <slot name="info"></slot>
                    </template>
                </el-tooltip>
                <el-tooltip v-if="showSetting" effect="dark" content="列设置" :placement="placement">
                    <span>
                        <el-popover :visible="visible" trigger="click" popper-class="setting-popover">
                            <template #reference>
                                <el-icon size="20px" color="#333" class="custom-tooltip" @click.stop="visible = !visible">
                                    <Setting />
                                </el-icon>
                            </template>
                            <div class="setting-checkbox-list" @click.stop>
                                <div class="setting-checkbox-top">
                                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                                        @change="handleCheckAllChange">列展示</el-checkbox>
                                    <el-button type="primary" link @click="handleReset">重置</el-button>
                                </div>
                                <el-checkbox-group v-model="checkList" @change="handleCheckedChange" :class="['setting-checkbox--box', { 'setting-checkbox--box_on': expand }]">
                                    <div class="setting-checkbox-group">
                                        <div v-for="item in tableHeadList" :key="item" class="setting-checkbox-option">
                                            <el-icon size="13px" color="#dfdede" class="custom-tooltip"
                                                style="margin-right: 6px;">
                                                <Menu />
                                            </el-icon>
                                            <el-checkbox :label="item">{{ item }}</el-checkbox>
                                        </div>
                                    </div>
                                </el-checkbox-group>
                            </div>
                        </el-popover>
                    </span>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, watch } from 'vue'
import { RefreshRight, Monitor, QuestionFilled, Setting, Menu } from '@element-plus/icons-vue'

export default {
    name: 'TableTool',

    components: {
        RefreshRight,
        Monitor,
        QuestionFilled,
        Setting,
        Menu
    },

    props: {
        showInfo: {
            type: Boolean,
            default: false
        },

        showSetting: {
            type: Boolean,
            default: true
        },

        showRefresh: {
            type: Boolean,
            default: true
        },

        queryDom: {
            type: String,
            default: 'body'
        },

        updateTool: {
            type: Boolean
        },

        placement: {
            type: String,
            default: 'top'
        }
    },

    data() {
        return {
            isIndeterminate: false,
            visible: false,
            checkAll: true,
            checkList: [],
            tableHeadList: [],
            thList: [],
            diffLabels: []
        }
    },

    watch: {
        updateTool: {
            handler(val) {
                if (this.showSetting) {
                    this.isIndeterminate = false
                    this.checkAll = true
                    this.tableHeadList = [] // 重置选项
                    this.getCheckList()
                }
            },
            immediate: false
        }
    },

    setup() {
        const reload = inject('reload', () => {})
        return {
            reload
        }
    },

    mounted() {
        if (this.showSetting) {
            this.getCheckList()
        }
    },

    activated() {
        document.addEventListener('click', this.handleClick)
    },

    deactivated() {
        // 销毁 tool
        this.visible = false
        document.removeEventListener('click', this.handleClick)
    },

    methods: {
        getCheckList() {
            setTimeout(() => {
                const queryDom = (this.queryDom === 'body' || this.queryDom.startsWith('.')) ? this.queryDom : `.${this.queryDom}`
                const oHeader = document.querySelector(`${queryDom} .el-table__header`)
                const oTableTH = oHeader.getElementsByClassName('is-leaf')
                const transformDomArr = [...oTableTH]
                
                transformDomArr.forEach(dom => {
                    const thChildren = dom.children[0]
                    const labelChildren = thChildren.children[0]
                    const childrenText = thChildren && thChildren.innerText
                    if (!labelChildren && childrenText) {
                        this.tableHeadList.push(childrenText)
                        this.thList.push(dom)
                    }
                })
                this.checkList = this.tableHeadList
            }, 500)
        },

        refreshData() {
            this.$emit('refresh') // 刷新表格数据
        },

        handleClick() {
            this.visible = false
        },

        handleCommand(command) {
            if (command === 'refresh') {
                this.reload()
            }
        },

        handleCheckAllChange(val) {
            const changeList = val ? [] : this.tableHeadList
            this.checkList = val ? this.tableHeadList : []
            this.isIndeterminate = false
            this.updateEmptyWidth(!val)
            this.$emit('checkChange', changeList)
        },

        handleCheckedChange(value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.tableHeadList.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableHeadList.length
            this.diffLabels = []
            this.tableHeadList.forEach((item) => {
                const index = value.findIndex(newItem => newItem === item)
                if (index < 0) {
                    this.diffLabels.push(item)
                }
            })
            this.updateEmptyWidth(!this.checkList.length)
            this.$emit('checkChange', this.diffLabels)
        },

        handleReset() {
            this.checkList = this.tableHeadList
            this.checkAll = true
            this.isIndeterminate = false
            this.$emit('checkChange', [])
        },

        updateEmptyWidth(isSetMinWidth) {
            const oEmpty = document.querySelector('.el-table__empty-block')
            if (!oEmpty) return
            if (isSetMinWidth) {
                oEmpty.style.minWidth = '100%'
            } else {
                oEmpty.style.minWidth = ''
            }
        }
    }
}
</script>

<style lang='scss'>
.tool-box {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    .tool-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;

        .custom-tooltip {
            margin-left: 16px;
            font-size: 20px;
            cursor: pointer;
        }
    }
}

.setting-checkbox-list {
    .setting-checkbox-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 16px 10px 26px;
        border-bottom: 1px solid #e8e8e8;
    }
    ::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 8px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    ::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
        background: #ccc;
    }

    ::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
        background: #ededed;
    }
}

.setting-checkbox--box {
    max-height: 475px;
    overflow-y: auto;
    &_on {
        max-height: 360px;
    }
}

.setting-checkbox-group {
    padding: 4px 0 4px 3px;

    .setting-checkbox-option {
        padding: 0px 16px 0px 4px;
        display: flex;
        align-items: center;
    }

    .setting-checkbox-icon {
        font-size: 13px;
        margin-right: 6px;
        color: rgba(223, 222, 222, 1);
    }
}

.setting-popover {
    padding: 0 !important;
}
</style>