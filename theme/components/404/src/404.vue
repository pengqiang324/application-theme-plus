<template>
    <div class="wscn-http404-container">
        <div class="wscn-noFind">
            <NoFound />
            <h2 class="wscn-noFind-title">404</h2>
            <p class="wscn-noFind-text">很抱歉，你访问的页面不存在</p>
        </div>
    </div>
</template>

<script>
import NoFound from '../../NoFound';
export default {
    name: 'NoFind',
    components: {
        NoFound
    }
};
</script>

<style lang="scss" scoped>
.wscn-http404-container {
    position: absolute;
    top: 40%;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50%);
}

.wscn-noFind {
    position: relative;
    top: 12px;

    .wscn-noFind-title {
        padding: 30px 0 10px;
        font-size: 30px;
        text-align: center;
    }

    .wscn-noFind-text {
        font-size: 18px;
        text-align: center;
    }
}
</style>
