<template>
    <div>
        <h1>这里是计数页面1</h1>
        {{points}}
        <br />
        <input type="button" @click="increase" value="点击+1">
        <router-link :to="{name:'ShowCounter2'}">计数页面2</router-link>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { INCREASE } from '@/vuex/mutation_types'

export default {
    computed: {
        points() {
            return store.getters.get_points; // 通过getter获取到 状态“points"的方法。
        }
    },
    store,
    methods: {
        increase() {
            store.commit(INCREASE, store.getters.get_points + 1); // 通过 INCREASE 这个action 来改变 "points"的值。
        }
    }
}
</script>