<template>
    <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
        <div v-bind:class="{active:isActive}"><slot  name="item-text"></slot> </div>
    </div>
</template>

<script>
    export default {
        name: "tabBarItem",
        props:{
            path:String
        },
        components:{
        },
        data(){
            return {
/*
                isActive: false,
*/
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
    }
    .active{
        color: #3091F2;
    }
</style>
