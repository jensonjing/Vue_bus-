<template>
    <div>
        <button @click="change">改变</button>
    </div>
</template>

<script>
export default {
    name:'about',
    data(){
        return {
            msg:'About'
        }
    },
    methods:{
        change(){
            this.$bus.$emit('log',5);
        }
    },
    created() {
        let obj = this.$route.params
        console.log(obj);
    },
    mounted() {
        this.$bus.$off('log')
        this.$bus.$off('log1')
        this.$bus.$off('log2')
        this.$bus.$on('log',(res)=>{
            console.log(res);
        })
        this.$bus.$on('log1',(res)=>{
            console.log(res);
        })
        this.$bus.$on('log2',(res)=>{
            console.log(res);
        })
    },
}
</script>