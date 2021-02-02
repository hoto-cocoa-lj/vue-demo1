<template>
    <div>
        <input v-model="name"/>{{ name }}
        <hr>
        <input v-model="pwd"/>{{ pwd }}
        <hr>
        {{ f1() }}
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {'name': '登陆组件'}
        },
        computed: {
            pwd(){return '密码-'+this.name}
        },
        methods: {
            f1:function() {
                return "ff11"
            }
        }
    }
</script>

<style scoped>

</style>