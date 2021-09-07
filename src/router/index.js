import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants,
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue'),
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue'),
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue'),
  },
  {
    path: '/restaurants/:id', // 因為是由上往下匹配，所以路由順序要放在 top & feeds 後面
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue'),
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue'),
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UsersEdit.vue'),
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/admin',
    exact: true, // 完全匹配
    redirect: '/admin/restaurants', // 重新導向
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },
  {
    path: '*', // 星號 (*) 是萬用字元，代表所有網址
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router
