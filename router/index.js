import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import People from '@/components/People'
import News from '@/components/News'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Recruit from '@/components/Recruit'
import Consult from '@/components/Consult'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/consult',
      name: 'consult',
      component: Consult
    }
  ],
  mode: 'history'
});
