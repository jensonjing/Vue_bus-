/**
 * 参数说明：
 * state: 这里的state类似于vue每个组件中的data参数，用来定义全局的状态键名。
 * 
 * getters: 类似于vue对象中的computed属性，也就是计算属性，例如：这里定义了一个saleNUms方法，
 * 方法内部通过使用数组的map方法，对数组中的对象进行遍历，并将每个对象中的年龄乘以2，最终输出新的数组对象。
 * 补充说明:这里的map方法和forEach已经jquery中的$each()方法用法一致。
 * 
 * mutations: 这里的mutations类似于vue组件中的methods属性。
 * 在其他组件中调用的时候使用this.$store.commit('方法名',自定义参数)
 * 一条重要的原则就是要记住 mutation 必须是同步函数
 * 也可借助mapActions将this.$store.commit('方法名',自定义参数)映射为this.方法名(自定义参数)
 * 
 * actions:这里的actions类似于vuex中的整个store。
 * 注意：这里可以用于异步也可用于同步操作，这里以异步模拟返回结果
 * 在其他组件中调用需要使用this.$store.dispatch('方法名',自定义参数)
 * 也可借助mapActions将this.$store.dispatch('方法名',自定义参数)映射为this.方法名(自定义参数)
 * 
 * 
 * */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        name:'',
        projects:[
            { name: '小三', age: 18 },
            { name: '小四', age: 19 },
            { name: '小五', age: 20 }
        ]
    },
    getters:{
        saleNums:(state)=>{
            let newprojects = state.projects.map(item=>{
                return {
                    name: item.name,
                    age: item.age * 2
                }
            });
            return newprojects;
        },
        /** 
         * 这个第一个参数是store内部的state值，第二个参数是自定义参数
         * 补充说明：这里使用了数组的find方法，返回数组中对应的值(这里用来返回年龄为18的对象).
         * 注意：这里只能返回第一个找到的值，即如果数组中有个18岁的只返回找到的第一个对象
        */
        findDom: (state) => (id) => {
            return state.projects.find(a => a.age == id)
        }
    },
    mutations:{
        minAge:(state,num)=>{
            let newprojet = state.projects.forEach((res)=>{
                console.log(res);
                res.age -= num
            });
            return newprojet
        }
    },
    actions:{
        chagename(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    context.commit('minAge', payload)
                    resolve(5);
                }, 1000);
            })
        }
    }
})

export default store;