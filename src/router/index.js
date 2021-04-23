import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'
//import firebase from '../firebase'
import UserList from '../components/UserList.vue'
import UserAdd from '../components/UserAdd.vue'
import ShowUser from '../components/ShowUser.vue'
import EditUser from '../components/EditUser.vue'
import AddQuestion from '../components/Question/AddQuestion.vue'
import ListQuestion from '../components/Question/ListQuestion.vue'
import ListDeThi from '../components/DeThi/ListDeThi.vue'
import EditQuestion from '../components/Question/EditQuestion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'singin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/useradd',
    name: 'useradd',
    component: UserAdd
  },
  {
    path: '/showuser/:id',
    name: 'showuser',
    component: ShowUser
  },
  {
    path: '/edituser/:id',
    name: 'edituser',
    component: EditUser
  },
  {
    path: '/addquestion',
    name: 'addquestion',
    component: AddQuestion
  },
  {
    path: '/listquestion',
    name: 'listquestion',
    component: ListQuestion
  },
  {
    path: '/editquestion/:id',
    name: 'editquestion',
    component: EditQuestion
  },
  {
    path: '/listdethi',
    name: 'listdethi',
    component: ListDeThi
  },
  {
    path: '/admin',
    name: 'admin',
    component : () => import("../views/Admin.vue"),
  },
  {
    path: '/adddethi',
    name: 'adddethi',
    component: () => import("../components/DeThi/AddDeThi.vue"),
  },
  {
    path: '/editdethi/:id',
    name: 'editdethi',
    component: () => import("../components/DeThi/EditDeThi.vue"),
  },
  {
    path: '/listketqua',
    name: 'listketqua',
    component: () => import("../components/KetQua/ListKetQua.vue"),
  },
  {
    path: '/listbaitap',
    name: 'listbaitap',
    component: () => import("../components/BaiTap/ListBaiTap.vue"),
  },
  {
    path: '/addbaitap',
    name: 'addbaitap',
    component: () => import("../components/BaiTap/AddBaiTap.vue"),
  },
  {
    path: '/editbaitap/:id',
    name: 'editbaitap',
    component: () => import("../components/BaiTap/EditBaiTap.vue"),
  },
  {
    path: '/listlesson',
    name: 'listlesson',
    component: () => import("../components/Lesson/ListLesson.vue"),
  },
  {
    path : '/editlesson/:id',
    name : 'editlesson',
    component : () => import("../components/Lesson/EditLesson.vue"),
  },
  {
    path : '/addlesson',
    name : 'addlesson',
    component : () => import("../components/Lesson/AddLesson.vue"),
  },
]

// const router = new VueRouter({
//   routes
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/signin')
  } else {
    next()
  }
})


export default router
