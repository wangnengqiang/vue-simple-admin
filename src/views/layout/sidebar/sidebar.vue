<template>
    <div class="el-menu-vertical">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import store from "../../../store"
    export default {
        name: "sidebar",
        store,
        components:{
        },
        data() {
            return {
                isCollapse:this.$store.state.isOpen,
                msg:"测试信息",
            };
        },
        watch:{
            "$store.state.isOpen": function(){
                this.isCollapse = this.$store.state.isOpen;
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath,this.isCollapse,);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath,this.isCollapse);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
    }
    .scrollbar-wrapper {
        overflow-x: hidden !important;
    }
</style>
