import { createRouter, createWebHistory } from 'vue-router'
import Cookies from "universal-cookie"
const cookie = new Cookies();
if(!cookie.get('languages')){
  cookie.set('languages','en');
}
import meta_Description from './Description.json'
import meta_keywords from './Keywords.json'
const routes = [
  {
    path: '/',
    name: cookie.get('languages') == 'ar' ? 'الصفحة الرئيسية' : 'Home Page' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Home.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - الرئيسية' : 'Lazurde - Home Page' ,
      metaTags: [
        {
          name: 'description',
          content: meta_Description.Home_Description
        },
        {
         name: 'keywords',
         content: meta_keywords.Home_Keywords
        }
      ]
        },
  },
  {
    path: '/about',
    name: cookie.get('languages') == 'ar' ? 'من نحن' : 'About Us' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/About.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - من نحن' : 'Lazurde - About Us' ,
        },
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import(/* webpackChunkName: "App" */'../views/Error.vue')
 },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//  for meta title
router.beforeResolve((to) => {
  document.title = to.meta.title || "إتمام"
  if(to.meta.hasOwnProperty('metaTags')) {
    for(let x=0; x < to.meta.metaTags.length; x++) {
      let oldMeta = document.getElementsByTagName('meta');
      for(let m=0; m < oldMeta.length; m++) {
        if(oldMeta[m].name == to.meta.metaTags[x].name) {
          oldMeta[m].remove()
        }
      }
      let meta = document.createElement('meta')
      if(to.meta.metaTags[x] && to.meta.metaTags[x].hasOwnProperty('name')) {
        meta.name = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      if(to.meta.metaTags[x].hasOwnProperty('property')) {
        meta.property = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      document.head.appendChild(meta)
    }
  }
  if (to.meta.requiresAuth && cookie.get('Userdata') == '') {
    return {
      path: '/login',
    }
  }
})
export default router
