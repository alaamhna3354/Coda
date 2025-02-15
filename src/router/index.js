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
    path: '/services',
    name: cookie.get('languages') == 'ar' ? 'الخدمات' : 'Services' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Services/index.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - الخدمات' : 'Lazurde - Services' ,
        },
  },
  {
    path: '/services/details/:id',
    name: cookie.get('languages') == 'ar' ? 'تفاصيل الخدمة' : 'Services Details' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Services/Details.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - تفاصيل الخدمة' : 'Lazurde - Services Details' ,
        },
  },
  {
    path: '/projects',
    name: cookie.get('languages') == 'ar' ? 'المشاريع' : 'Projects' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Projects/index.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - المشاريع' : 'Lazurde - Projects' ,
        },
  },
  {
    path: '/projects/details/:id',
    name: cookie.get('languages') == 'ar' ? 'تفاصيل المشروع' : 'Project Details' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Projects/Details.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - تفاصيل المشروع' : 'Lazurde - Project Details' ,
        },
  },
  {
    path: '/contact',
    name: cookie.get('languages') == 'ar' ? 'تواصل معنا' : 'Contact Us' ,
    component: () => import(/* webpackChunkName: "App" */'../views/pages/Contact.vue'),
    meta: {
      title: cookie.get('languages') == 'ar' ? 'لازورد - تواصل معنا' : 'Lazurde - Contact Us' ,
        },
  },
    // ___________________ Auth  ___________________
    {
      path: '/sign-up',
      name: cookie.get('lang') == 'ar' ? 'تسجيل حساب' : ' SignUp',
      component: () => import(/* webpackChunkName: "App" */'../views/auth/SignUp.vue'),
      meta: {
        title: cookie.get('lang') == 'ar' ? 'لازورد - تسجيل حساب' : 'Lazurde - Login Or SignUp' ,
        requiresHome:true
      }
    },
    {
      path: '/sign-in',
      name: cookie.get('lang') == 'ar' ? 'تسجيل الدخول' : 'Login ',
      component: () => import(/* webpackChunkName: "App" */'../views/auth/SignIn.vue'),
      meta: {
        title: cookie.get('lang') == 'ar' ? 'لازورد - تسجيل الدخول' : 'Lazurde - Login ' ,
        requiresHome:true
      }
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
  document.title = to.meta.title || "Lazurde"
  if (Object.prototype.hasOwnProperty.call(to.meta, 'metaTags')) {
    for (let x = 0; x < to.meta.metaTags.length; x++) {
        let oldMeta = document.getElementsByTagName('meta');
        for (let m = 0; m < oldMeta.length; m++) {
            if (oldMeta[m].name == to.meta.metaTags[x].name) {
                oldMeta[m].remove();
            }
        }
        let meta = document.createElement('meta');
        if (to.meta.metaTags[x] && Object.prototype.hasOwnProperty.call(to.meta.metaTags[x], 'name')) {
            meta.name = to.meta.metaTags[x].name;
            meta.content = to.meta.metaTags[x].content;
        }
        if (Object.prototype.hasOwnProperty.call(to.meta.metaTags[x], 'property')) {
            meta.property = to.meta.metaTags[x].name;
            meta.content = to.meta.metaTags[x].content;
        }
        document.head.appendChild(meta);
    }
}
  if (to.meta.requiresAuth && cookie.get('Userdata') == '') {
    return {
      path: '/login',
    }
  }
})
export default router
