<template>
    <div>
        {{msg}}<br/>
        <button @click="loginOut">退出登录</button>
        <button @click="Go">跳转</button>
        <button @click="small(2)">mutations调用</button>
        <button @click="small2(1)">actions调用</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name:'Home',
    data(){
        return {
            msg:'主页',
            arr:[
                { name: '小三', age: 1 },
                { name: '小四', age: 2 },
                { name: '小五', age: 3 }
            ],
            datas: this.$store.state.projects,//获取store中的数据
            gets: this.$store.getters.saleNums,
            fa: this.$store.getters.findDom(18),
            /**
             * 注意：以下是错误的写法，如果是在computed中通过mapGetters引入的getters
             * 在组件的data中不能直接通过this.方法名来获取值，因为有加载顺序问题，会导致拿到的值为undefined
             * 需要在其它生命周期函数中中进行使用(如下)
             * 如需在data中直接使用，则需要写完整的写法即this.$store.getters.saleNums
             * 
             * 同理通过mapState引入的state也是如此，需要在其它生命周期函数中进行使用
             * 如需在data中直接使用，则需要写完整的写法即this.$store.state.projects
             */
            hh: this.saleNums,//错误写法(不能在data中这样写，可在生命周期函数中使用，但须借用对应的map.....)
            kk: this.projects//错误写法(不能在data中这样写，可在生命周期函数中使用,但须借用对应的map.....)
        }
    },
    methods:{
        ...mapMutations([
            "minAge"
        ]),
        ...mapActions([
            'chagename'
        ]),
        init(){
            let arr1 = ['hi~'];
            function aa(){
                return arr1;
            }
            let str = 'hello';
            let arr = [2,3,4,5];
            this.$bus.$emit('log',aa())
            this.$bus.$emit('log1',str)
            this.$bus.$emit('log2',arr)
        },
        loginOut(){
            sessionStorage.clear();
            this.$router.push({
                path:'/Login'
            })
        },
        Go(){
           this.$router.push({
               name:'About',
               params:{'id':'1'}
           })
        },
        small(id){
            //这里第一个参数是方法名，第二个参数是自定义参数
            //this.$store.commit('minAge',id);
            /**
             * 这里是执行了store中的mutations中的方法
             * 注意：这里使用时需要用this.$store.commit('方法名',自定义参数)
             * 这里可以写成这样，同上边的写法一致，这里是借助vuex中的mapMutations，将 `this.minAge()` 映射为 `this.$store.commit('minAge',id)`
             * 需要注意的是，使用前必须局部引入，即import { mapMutations } from 'vuex'
             *  */
            this.minAge(id);
        },
        small2(id){
            /**
             * 这里是执行了store中actions中的方法
             * 注意：这里使用时需要用this.$store.dispatch('方法名',自定义参数)
             * 这里一般用于需要异步操作的位置（这里使用了调用后.then是因为在方法中new 了一个promise）
             * 这里可以写成下边的写法，借助vuex中的mapActions将this.change()映射为this.$store.dispatch()
             * 需要注意的是，使用前必须局部引入，即import { mapActions } from 'vuex'
             * */
            // this.$store.dispatch('chagename', id).then(()=>{
            //     console.log("返回了");
            // })
            this.chagename(id).then((e)=>{
                console.log("返回了" + e);
            })
        }
    },
    created() {
        this.init();
        console.log(this.datas);
        console.log(this.gets);
        console.log(this.fa)
        console.log(this.projects);
    },
    mounted() {
        let cc = this.saleNums;
        console.log(cc);
    },
    computed: {
        /**
         * getters中的自定义方法一般在 组件的computed中注入(因为getters本身就是计算属性)
         * 在computed中注入的使用时只需以this.名称即可（即采用属性的形式使用）
        */
        ...mapGetters([
            'saleNums',
            'findDom'
        ]),
        ...mapState([
            'name',
            'projects'
        ])
    },
}
</script>