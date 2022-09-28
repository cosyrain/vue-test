<template>
    <div>
        <textarea v-model="content"></textarea>
        <input type="button" value="留言" @click="submit">
    </div>
</template>

<script>

export default {
    data() {
        return {
            content: ''
        }
    },
    methods: {
        submit: function () {
            this.$http.post('/api/interface/blogs/add_comment', {
                content: this.content
            }).then(response => {
                console.log('提交成功', response);
            }, response => {
                console.log('提交失败', response);
            })
        }
    }
}
</script>