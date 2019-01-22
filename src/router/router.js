import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'

export const RouterPath = [
    {
        path:'/',
        redirect: '/Home'
    },
    {
        path:'/Home',
        name:'Home',
        meta: { title: "首页" },
        component: Home
    },
    {
        path: '/Login',
        meta:{title:'登录'},
        name: 'Login',
        component: Login
    },
    {
        path: '/About/:id',
        meta: { title: '关于我们' },
        name: 'About',
        component: About
    },
];