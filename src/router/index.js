import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Device from '@/components/Device'
import Relay from '@/components/Relay'
import Solvedorder from '@/components/Solvedorder'
import Unsolvedorder from '@/components/Unsolvedorder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userlist',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/devicelist',
      name: 'Device',
      component: Device
    },
    {
      path: '/relaylist',
      name: 'Relay',
      component: Relay
    },
    {
      path: '/solvedorder',
      name: 'Solvedorder',
      component: Solvedorder
    },
    {
      path: '/unsolvedorder',
      name: 'Unsolvedorder',
      component: Unsolvedorder
    }
  ]
})
