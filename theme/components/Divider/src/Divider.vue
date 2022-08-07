
<script>
import { h, resolveComponent, createVNode, ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import PopConfirm from '../../PopConfirm'


function DividerCommand(dropdownRef) {
    return function (command, el) {
        console.log('对象', command, el)
    }
}

function handleDelOption(dom, attrs, isMore = false) {
    let children = null
    const vNode = typeof dom.children === 'object' && dom.children.default() || []
    if (vNode[0] && vNode[0].children.trim() === '删除' || attrs.poptitle) {
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
    }
    return children
}
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Divider',
    
    components: {
        'PopConfirm': PopConfirm
    },

    setup(props, { attrs, slots}) {
        const Children = slots.default().filter((item) => {
            if (item.children == null) return false
            // 判断是否为指令 v-if
            if (typeof item.children === 'string' && item.children === 'v-if') return false
            // 判断是否为指令 v-show 需加 modifiers 标识 on
            if (item.dirs) {
                return !item.dirs.some(dir => dir.arg === 'on')
            }
            return true
        })
        // 创建默认操作选项
        const createDefaultVDOM = function (dom, index) {
            const children = handleDelOption(dom, attrs)
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
                            ref: '11',
                            placement: 'bottom',
                            trigger: attrs.trigger || 'click',
                            hideOnClick: false, // 是否点击菜单项隐藏
                            onCommand: DividerCommand()
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
                                        const Children = handleDelOption(children, attrs, true)
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
        let Number = attrs.number || 2
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
        
        return () => h(
            'div',
            null,
            {
                default: () => renderDOM
            }
        )
    },
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
    line-height: 25px;
}

.el-icon-arrow-down {
    margin-left: 4px;
    position: relative;
    font-size: 12px;
}
</style>