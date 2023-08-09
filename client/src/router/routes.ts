import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    name: 'repo-list',
    component: () => import('@/pages/repositories-list.vue'),
  },
  {
    path: '/:owner/:repo',
    name: 'repository-detail-card',
    component: () => import('@/pages/repository-detail-card.vue'),
  },
] as RouteRecordRaw[];
