<template>
    <div class="hi">
        Hi vue!
        {{message}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:'本消息来自变量。'
            }
        }
    }
</script>

<style>
    .hi{
        color:red;
        font-size: 20px;
    }
</style>