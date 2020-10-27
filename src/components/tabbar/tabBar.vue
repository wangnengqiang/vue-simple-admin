<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabBar",
        components:{
        }
    }
</script>

<style scoped>
    #tab-bar{
        display: flex;
        background-color: #f6f6f6;
        text-align: center;
        position: fixed;

        left: 0;
        right: 0;
        bottom: 0;

    }
</style>
