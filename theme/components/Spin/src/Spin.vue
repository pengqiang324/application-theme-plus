<script>
import { h } from 'vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Spin',
    setup() {
        return () =>
            h('span', { class: 'spin-dot spin-dot-spin' }, [
                h('i', { class: 'spin-dot-item' }),
                h('i', { class: 'spin-dot-item' }),
                h('i', { class: 'spin-dot-item' }),
                h('i', { class: 'spin-dot-item' })
            ]);
    }
};
</script>

<style lang="scss">
.spin-dot {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    font-size: 20px;
}

.spin-dot-spin {
    transform: rotate(45deg);
    animation: ant-rotate 1.2s infinite linear;
}

.spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: #1890ff;
    border-radius: 100%;
    opacity: 0.3;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    animation: ant-spin-vue 1s infinite linear alternate;
}

.spin-dot-item:nth-child(1) {
    top: 0;
    left: 0;
}

.spin-dot-item:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
}

.spin-dot-item:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
}

.spin-dot-item:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
}

@keyframes ant-spin-vue {
    to {
        opacity: 1;
    }
}

@keyframes ant-rotate {
    to {
        transform: rotate(405deg);
    }
}
</style>
