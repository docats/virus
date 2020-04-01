// Main Function Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //告訴Vue要使用路由
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Test', //設定路由路徑
      component: () => import('@/views/test/Test') //掛載元件
    },
    {
      path: '/RewardEvent',
      component: () => import('@/views/pages/Games/RewardEvent')
    },
    {
      path: '/RewardPackage',
      component: () => import('@/views/pages/Games/RewardPackage')
    },
    {
      path: '/RewardGame',
      component: () => import('@/views/pages/Games/RewardGame')
    },
    {
      path: '/WorksToday',
      component: () => import('@/views/pages/Manage/WorksToday')
    },
    {
      path: '/ManagerRegister',
      component: () => import('@/views/pages/Manage/ManagerRegister')
    },
    {
      path: '/Parent',
      component: () => import('@/components/parent')
    },
    {
      path: '/Parent1',
      component: () => import('@/components/parent1')
    }
    
    // {
    //   path: '/Manage',
    //   children: [
        
    //   ]
    // }
  ]
})

export default router
