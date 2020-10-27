<template>
<div>
    <el-container style="height:100vh;">
            <sidebar></sidebar>
        <el-container>
            <el-header>
                 <div class="toggle" @click="toggleSideBar" v-if="!isCollapse"> <img style="margin-top: 14px;" src="../../assets/images/close.svg" alt=""/></div>
                 <div class="toggle"  @click="toggleSideBar" v-else> <img style="margin-top: 14px;" src="../../assets/images/open.svg" alt=""/></div>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</div>
</template>

<script>
    import sidebar from "./sidebar/sidebar";
    import navbar from "./main/navbar";
    import appmain from "./main/appmain"
    import store from "../../store"
    export default {
        name: "layout",
        store,
        data() {
            return {
                isCollapse:this.$store.state.isOpen
            };
        },
        components:{
            sidebar,
            navbar,
            appmain,
        },
        watch:{
            "$store.state.isOpen": function(){
                this.isCollapse = this.$store.state.isOpen;
            }
        },
        methods:{
            toggleSideBar(){
                this.$store.commit('switch_sideBar');
            }
        },
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .toggle{
        float: left;
        text-align: center;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
