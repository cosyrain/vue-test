<template>
    <div>
        <h1>双向绑定</h1>
        <p>页面上的值：{{my_value}}</p>
        <p>通过视图层修改my_value：</p>
        <input v-model="my_value">
        <hr>
        <input type="button" @click="change_my_value_by_code()" value="通过代码修改my_value">
        <hr>
        <input type="button" @click="show_my_value()" value="显示代码中的my_value">

        <h1>表单处理</h1>
        <input type="text" v-model="input_value">{{input_value}}
        <hr>
        <textarea name="textarea" v-model="textarea_value"></textarea>
        {{textarea_value}}
        <hr>
        <input type="radio" name="radio" v-model="radio_value" value="A">A
        <input type="radio" name="radio" v-model="radio_value" value="B">B
        <input type="radio" name="radio" v-model="radio_value" value="C">C
        {{radio_value}}
        <hr>
        <input type="checkbox" name="checkbox" v-model="checkbox_value" v-bind:true-value="true"
            v-bind:false-value="false">
        {{checkbox_value}}
        <hr>
        <select name="select" v-model="select_value">
            <option v-for="(e, index) in options" :key="index" v-bind:value="e.value">
                {{e.text}}
            </option>
        </select>
        {{select_value}}
        <hr>

    </div>
</template>

<script>
export default {
    data() {
        return {
            my_value: '默认值',
            input_value:"",
            textarea_value:'',
            radio_value:'',
            checkbox_value:'',
            select_value:'C',
            options:[
                {
                    text:'1',value:'A'
                },
                {
                    text:'2',value:'B'
                },
                {
                    text:'3',value:'C'
                },
            ]
        }
    },
    methods: {
        show_my_value: function () {
            alert('my_value' + this.my_value);
        },
        change_my_value_by_code: function () {
            this.my_value += ',在代码中修改'
        }
    }
}
</script>