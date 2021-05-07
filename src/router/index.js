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
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/Home.vue')
  // },
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
    component: UserList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/useradd',
    name: 'useradd',
    component: UserAdd,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/showuser/:id',
    name: 'showuser',
    component: ShowUser,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edituser/:id',
    name: 'edituser',
    component: EditUser,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addquestion',
    name: 'addquestion',
    component: AddQuestion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listquestion',
    name: 'listquestion',
    component: ListQuestion,
    meta: {
      requiresAuth: true,
      meta: {
        requiresAuth: true
      }
    }
  },
  {
    path: '/editquestion/:id',
    name: 'editquestion',
    component: EditQuestion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listdethi',
    name: 'listdethi',
    component: ListDeThi,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/adddethi',
    name: 'adddethi',
    component: () => import("../components/DeThi/AddDeThi.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editdethi/:id',
    name: 'editdethi',
    component: () => import("../components/DeThi/EditDeThi.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/dethidetail/:id',
    name : 'dethidetail',
    component : () => import("../components/DeThi/DeThiDetail.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/addquiz/:id',
    name : 'addquiz',
    component : () => import("../components/DeThi/AddQuiz.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listketqua',
    name: 'listketqua',
    component: () => import("../components/KetQua/ListKetQua.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listbaitap',
    name: 'listbaitap',
    component: () => import("../components/BaiTap/ListBaiTap.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addbaitap',
    name: 'addbaitap',
    component: () => import("../components/BaiTap/AddBaiTap.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/editbaitap/:id',
    name: 'editbaitap',
    component: () => import("../components/BaiTap/EditBaiTap.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listlesson',
    name: 'listlesson',
    component: () => import("../components/Lesson/ListLesson.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/editlesson/:id',
    name : 'editlesson',
    component : () => import("../components/Lesson/EditLesson.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/addlesson',
    name : 'addlesson',
    component : () => import("../components/Lesson/AddLesson.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/listnew',
    name : 'listnew',
    component : () => import("../components/New/ListNew.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/addnew',
    name : 'addnew',
    component : () => import("../components/New/AddNew.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/editnew',
    name : 'editnew',
    component : () => import("../components/New/EditNew.vue"),
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path : '/editnew',
  //   name : 'editnew',
  //   component : () => import("../components/New/EditNew.vue"),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path : '/lesson',
    name : 'lesson',
    component : () => import("../components/User/Baihoc/ListBaiHoc.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/lessondetail/:id',
    name : 'lessondetail',
    component : () => import("../components/User/Baihoc/LessonDetail.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/dotest/:id',
    name : 'dotest',
    component : () => import("../components/User/KiemTra/DoTest.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/listtest/',
    name : 'listtest',
    component : () => import("../components/User/KiemTra/ListTest.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/admin',
    name : 'admin',
    component : () => import("../views/AdminHome.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/profile',
    name : 'profile',
    component : () => import("../views/UserProfile.vue"),
    meta: {
      requiresAuth: true
    }
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
