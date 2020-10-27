<template>
    <tabBar>
        <tab-bar-item path="/home">
            <img  slot="item-icon-active" src="~images/tabbar/home.svg" alt=""/>
            <img slot="item-icon" src="~images/tabbar/home-outline.svg" alt=""/>
            <div slot="item-text">首页</div>
        </tab-bar-item >
        <tab-bar-item path="/category">
            <img  slot="item-icon-active" src="~images/tabbar/view-grid-plus.svg" alt=""/>
            <img slot="item-icon" src="~images/tabbar/view-grid-plus-outline.svg" alt=""/>
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img  slot="item-icon-active" src="~images/tabbar/cart.svg" alt=""/>
            <img slot="item-icon" src="~images/tabbar/cart-outline.svg" alt=""/>
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img  slot="item-icon-active" src="~images/tabbar/account.svg" alt=""/>
            <img slot="item-icon" src="~images/tabbar/account-outline.svg" alt=""/>
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tabBar>
</template>

<script>
    import tabBar from "../../components/tabbar/tabBar";
    import tabBarItem from "../../components/tabbar/tabBarItem";
    export default {
        name: "homeTabBar",
        components:{
            tabBar,
            tabBarItem,
        }
    }
</script>

<style scoped>

</style>
