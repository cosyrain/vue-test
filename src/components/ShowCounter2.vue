<template>
    <div>
        <h1>这里是计数页面2</h1>
        {{points}}
        <br />
        <router-link :to="{name:'ShowCounter1'}">计数页面1</router-link>
    </div>
</template>

<script>
    import store from "@/vuex/store";

    export default {
        computed:{
            points(){
                return store.getters.get_points;
            }
        }
    }
</script>