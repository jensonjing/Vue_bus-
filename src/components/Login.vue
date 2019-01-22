<template>
    <div>
        <button @click="setVal">{{msg}}</button>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            msg:'登录'
        }
    },
    methods:{
        setVal(){
            sessionStorage.setItem("sessiontoken",'12121321');
            this.$router.push({
                path:'/Home'
            })
        }
    },
    created(){

    }
}
</script>
