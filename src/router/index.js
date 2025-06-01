import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'universal-cookie';
import meta_seo from '../../public/data/seo-static-pages.json';

const cookie = new Cookies();

if (!cookie.get('languages')) {
  cookie.set('languages', 'ar');
}

// دالة مساعدة لإعادة بناء أسماء الرواتس والميتا حسب اللغة
function getRouteNameAndMeta(key, lang) {
  const routeNames = {
    home: { ar: 'الصفحة الرئيسية', en: 'Home Page' },
    about: { ar: 'من نحن', en: 'About Us' },
    services: { ar: 'الخدمات', en: 'Services' },
    servicesDetails: { ar: 'تفاصيل الخدمة', en: 'Services Details' },
    projects: { ar: 'المشاريع', en: 'Projects' },
    projectsDetails: { ar: 'تفاصيل المشروع', en: 'Project Details' },
    contact: { ar: 'تواصل معنا', en: 'Contact Us' },
    signup: { ar: 'تسجيل حساب', en: 'SignUp' },
    signin: { ar: 'تسجيل الدخول', en: 'Login' },
    error: { ar: 'خطأ', en: 'Error' },
  };

  return {
    name: routeNames[key][lang],
    meta: {
      title: meta_seo[`${key}_page`]?.[lang]?.title || 'Coda',
      metaTags: [
        {
          name: 'description',
          content: meta_seo[`${key}_page`]?.[lang]?.description || '',
        },
        {
          name: 'keywords',
          content: meta_seo[`${key}_page`]?.[lang]?.keywords || '',
        },
      ],
    },
  };
}

const getLang = () => cookie.get('languages') || 'ar';

const routes = [
  {
    path: '/',
    ...getRouteNameAndMeta('home', getLang()),
    component: () => import(/* webpackChunkName: "Home" */ '../views/pages/Home.vue'),
  },
  {
    path: '/about',
    ...getRouteNameAndMeta('about', getLang()),
    component: () => import(/* webpackChunkName: "About" */ '../views/pages/About.vue'),
  },
  {
    path: '/services',
    ...getRouteNameAndMeta('services', getLang()),
    component: () => import(/* webpackChunkName: "Services" */ '../views/pages/Services/index.vue'),
  },
  {
    path: '/services/details/:slug',
    ...getRouteNameAndMeta('servicesDetails', getLang()),
    component: () => import(/* webpackChunkName: "Services-Details" */ '../views/pages/Services/Details.vue'),
  },
  {
    path: '/projects',
    ...getRouteNameAndMeta('projects', getLang()),
    component: () => import(/* webpackChunkName: "Projects" */ '../views/pages/Projects/index.vue'),
  },
  {
    path: '/projects/details/:slug',
    ...getRouteNameAndMeta('projectsDetails', getLang()),
    component: () => import(/* webpackChunkName: "Project-Details" */ '../views/pages/Projects/Details.vue'),
  },
  {
    path: '/contact',
    ...getRouteNameAndMeta('contact', getLang()),
    component: () => import(/* webpackChunkName: "Contact" */ '../views/pages/Contact.vue'),
  },
  {
    path: '/sign-up',
    ...getRouteNameAndMeta('signup', getLang()),
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/auth/SignUp.vue'),
  },
  {
    path: '/sign-in',
    ...getRouteNameAndMeta('signin', getLang()),
    component: () => import(/* webpackChunkName: "Login" */ '../views/auth/SignIn.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: getLang() === 'ar' ? 'خطأ' : 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '../views/Error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// تحديث العنوان والميتا تاجز عند التنقل
router.beforeEach((to, from, next) => {
  // حذف const lang لأنه غير مستخدم
  // حذف const routeKey لأنه غير مستخدم

  // تعيين العنوان وميتا تاجز من الميتا
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Coda';
  }

  // تحديث الميتا تاجز
  if (to.meta?.metaTags) {
    to.meta.metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }

  next();
});

export default router;
