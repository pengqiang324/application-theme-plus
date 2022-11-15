
<script>
import { h, resolveComponent, createVNode, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import PopConfirm from '../../PopConfirm'

function DividerCommand(_this) {
    return function (command, el) {
        // console.log('对象', command, el, _this.hideOnClick)
    }
}

function handleDelOption(dom, attrs, isMore = false) {
    let children = null
    // if (
    //     typeof dom.type === 'symbol' && 
    //     dom.type.toString().includes('Fragment') // Fragment类型
    // ) {
    //     children = dom.children.filter((item) => {
    //         return judgmentType(item)
    //     }).map((child) => handleDelOption(child, attrs))
    //     return children
    // }
    const vNode = typeof dom.children === 'object' && dom.children.default() || []
    if (!vNode[0]) return
    if (vNode[0] && dom.props.poptitle) {
        // 当使用了 popConfirm 组件需搭配 hideOnClick attrs共同使用，否则会出现 popConfirm 组件错位问题
        children = 
            h(PopConfirm, {
                isMore: isMore,
                ...attrs,
                ...dom.props
            }, {
                default: () => vNode
            })
    } else {
        children = 
            h(
                isMore ? 'span' : resolveComponent('el-button'),
                {
                    class: { 'table-button': !isMore }, 
                    ...dom.props
                },
                {
                    default: () => vNode
                }
            )
        children.dirs = dom.dirs // directives 指令
    }
    return children
}

// 判断节点类型
function judgmentType(item) {
    if (
        typeof item.type === 'symbol' &&
        item.type.toString().includes('Comment') // v-if、 注释节点
    ) return false
    if (
        typeof item.type === 'string' ||
        (typeof item.type === 'symbol' &&
            item.type.toString().includes('Text'))
    ) {
        console.warn('<Divider> Only <el-button> is allowed.')
        return false
    }
    if (
        typeof item.type === 'symbol' &&
        item.type.toString().includes('Fragment') // Fragment类型
    ) {
        console.warn('Wrapping child elements in <template> tags is not supported at this time')
        return false
    }
    return true
}

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Divider',
    
    components: {
        'PopConfirm': PopConfirm
    },

    setup() {
        const hideOnClick = ref(true)

        return {
            hideOnClick
        }
    },

    render() {
        const { $slots, $attrs } = this
        const _this = this
        const Children = $slots.default().filter((item) => {
            return judgmentType(item)
        })
        // 创建默认操作选项
        const createDefaultVDOM = function (dom, index) {
            const children = handleDelOption(dom, $attrs)
            if (!children) return
            return (
                [
                    children,
                    h('i', { class: (index === Children.length - 1) ? '' : 'table-divider' }, { default: () => '' })
                ]
            )
        }
        // 创建更多操作选项
        const createMoreVDOM = function (haveMoreChildren) {
            return (
                [
                    h(
                        resolveComponent('el-dropdown'),
                        {
                            placement: 'bottom',
                            trigger: $attrs.trigger || 'hover',
                            hideOnClick: $attrs.hideOnClick == null ? true : $attrs.hideOnClick, // 是否点击菜单项隐藏 hideOnclick 需跟 popConfirm 配合使用
                            onCommand: DividerCommand(_this)
                        },
                        {
                            default: () => h(
                                'span',
                                { class: 'el-dropdown-link' },
                                {
                                    default: () => ['更多', h(resolveComponent('el-icon'), { class: 'el-icon-arrow-down', size: '13px' }, { default: () => createVNode(ArrowDown) })]
                                }
                            ),
                            dropdown: () => h(
                                resolveComponent('el-dropdown-menu'),
                                null,
                                {
                                    default: () => haveMoreChildren.map(children => {
                                        const Children = handleDelOption(children, $attrs, true)
                                        return h(
                                            resolveComponent('el-dropdown-item'),
                                            null,
                                            {
                                                default: () => [Children]
                                            }
                                        )
                                    })
                                }
                            )
                        }
                    )
                ]
            )
        }
        let renderDOM = null
        let Number = $attrs.number || 2
        const childLen = Children.length
        if (childLen <= Number) {
            renderDOM = Children.map((dom, index) => {
                return createDefaultVDOM(dom, index)
            })
        } else {
            Number = Number === 1 ? Number + 1 : Number
            const showMoreChildren = Children.slice(0, Number)
            const haveMoreChildren = Children.slice(Number - 1)
            renderDOM = showMoreChildren.map((dom, index) => {
                if (index !== (showMoreChildren.length - 1)) {
                    return createDefaultVDOM(dom, index)
                } else {
                    return createMoreVDOM(haveMoreChildren)
                }
            })
        }

        return h(
            'div',
            {
                style: 'display: flex; align-items: center;',
            },
            {
                default: () => renderDOM
            }
        )
    }
}
</script>

<style lang='scss'>

.table-button {
    font-size: 14px;
    font-weight: 500;
    color: #1890ff;
    cursor: pointer;
}

.table-button+.table-button {
    margin-left: 10px;
}

.table-divider {
    display: inline-block;
    width: 1px;
    height: 1em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
    background: #dcdfe6;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    display: block;
    line-height: 20px;
}

.el-icon-arrow-down {
    margin-left: 4px;
    position: relative;
    font-size: 12px;
}
</style>