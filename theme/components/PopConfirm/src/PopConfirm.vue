<script>
import { h, resolveComponent, createVNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'
export default {
    name: 'PopConfirm',
    props: {
        text: String,        // 按钮文本
        delTitle: String,    // 删除文案
        poptitle: String,    // 二次确认文案
        placement: String    // 出现位置
    },

    setup(props, { attrs, slots }) {
            
        return () => h(
            resolveComponent('el-popconfirm'),
            {
                title: props.delTitle || props.poptitle || '确认删除?',
                cancelButtonType: '',
                persistent: true,
                icon: Icons[props.icon || 'Warning'],
                iconColor: '#faad14',
                placement: props.placement || 'top-end',
                onConfirm: attrs.onConfirm
            },{
                reference: () => h(attrs.isMore ? 'span' : resolveComponent('el-button'), {
                    ...attrs.propsData,
                    ...attrs,
                    icon: !attrs.isMore && attrs.btnIcon ? createVNode(Icons[attrs.btnIcon]) : '', // 按钮 icon
                }, {
                    default: () => props.text || slots.default()
                })
            }
        )
    }
}
</script>