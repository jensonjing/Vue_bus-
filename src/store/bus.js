const install = function (Vue) {
    const Bus = new Vue({
        methods:{
            //定义方法：(这里...是es6语法中的扩展运算符，不理解的小伙伴可以自行百度)
            emit(event,...args){
                this.$emit(event,...args);
            },
            on(event,callback){
                this.$on(event,callback);
            },
            off(event,callback){
                this.$off(event,callback);
            }
        }
    });
    //注册到给vue对象的原型上添加全局属性
    Vue.prototype.$bus = Bus;
};
export default install;