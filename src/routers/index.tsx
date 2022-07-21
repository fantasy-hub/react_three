import { IRoute } from 'umi'; // 引入的 umi 里的路由接口定义规则

const routers: IRoute[] = [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/basic', component: '@/pages/basic' },
      { path: '/light', component: '@/pages/light' },
      { path: '/shadow', component: '@/pages/shadow' },
      { path: '/rect', component: '@/pages/rect' },
      { path: '/Loader', component: '@/pages/Loader' },
      { component: '@/pages/404' },
    ],
  },
];

export default routers;
