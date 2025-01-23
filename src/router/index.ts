import { createRouter, createWebHistory } from 'vue-router';
import Student from '@/views/Student.vue';  // 学生端功能页面
import Teacher from '@/views/Teacher.vue';  // 教师端功能页面
import Login from '@/views/Login.vue';      // 登录页
import LoginDialog from '@/components/LoginDialog.vue';  // 登录弹窗组件

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,  // 默认路由指向登录页面
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,  // 学生端功能页面
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,  // 教师端功能页面
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,  // 登录页面路径
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

