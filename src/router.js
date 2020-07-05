import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import ShopRegister from './views/Signup_Shop.vue';

import Dashboard from './views/AdminDashboard/Dashboard.vue';
//import UserProfile from './views/AdminDashboard/UserProfile.vue';
import UserProfile from './views/ShopDashboard/UserProfile.vue';
import TableList from './views/AdminDashboard/Pending_shops.vue';
import Typography from './views/AdminDashboard/Typography.vue';
import Icons from './views/AdminDashboard/Icons.vue';
import Notifications from './views/AdminDashboard/Notifications.vue';
import UpgradeToPRO from './views/AdminDashboard/UpgradeToPRO.vue';


//
import ShopDashboard from './views/ShopDashboard/Dashboard.vue';
import ShopProfile from './views/ShopDashboard/UserProfile.vue';
import ItemList from './views/ShopDashboard/ItemList.vue';
import Orders from './views/ShopDashboard/Typography.vue';
// import Icons from './views/ShopDashboard/Icons.vue';
// import Notifications from './views/ShopDashboard/Notifications.vue';
// import UpgradeToPRO from './views/ShopDashboard/UpgradeToPRO.vue';


Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    // {
    //   path: '/register',
    //   component: Register
    // },
    {
      path: '/register',
      component: ShopRegister
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },
    // {
    //   path: '/shop',
    //   name: 'shop',
    //   // lazy-loaded
    //   component: () => import('./views/Shop.vue')
    // },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/ShopDashboard/DashboardLayout.vue'),
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "/user",
          name: "User Profile",
          component: UserProfile
        },
        {
          path: "/table",
          component: TableList
        },
        {
          path: "/typography",
          name: "Typography",
          component: Typography
        },
        {
          path: "/icons",
          name: "Icons",
          component: Icons
        },

        {
          path: "/notifications",
          name: "Notifications",
          component: Notifications
        },
        {
          path: "/upgrade",
          name: "Upgrade to PRO",
          component: UpgradeToPRO
        }
      ]
    },
	
//
{
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/ShopDashboard/DashboardLayout.vue'),
      redirect: "/dashboard",
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: ShopDashboard
        },
        {
          path: "/user",
          name: "Shop Profile",
          component: ShopProfile
        },
        {
          path: "/item",
          component: ItemList
        },
        {
          path: "/orders",
          name: "Orders",
          component: Orders
        } ,
        // {
        //   path: "/icons",
        //   name: "Icons",
        //   component: Icons
        // },

        // {
        //   path: "/notifications",
        //   name: "Notifications",
        //   component: Notifications
        // },
        // {
        //   path: "/upgrade",
        //   name: "Upgrade to PRO",
        //   component: UpgradeToPRO
        // }
      ]
    }
	
	
  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});