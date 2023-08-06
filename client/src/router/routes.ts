import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    name: 'repo-list',
    component: () => import('@/pages/repositories-list.vue'),
  },
  {
    path: '/:username/:repositoriesName',
    name: 'repositories-detail',
    component: () =>
      import('@/pages/repositories-detail/repositories-detail.vue'),
  },
] as RouteRecordRaw[];
