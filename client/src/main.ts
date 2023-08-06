import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/app.vue';
import router from '@/router/router';

const init = () => {
  const app = createApp(App);

  app.use(router);
  app.use(VueQueryPlugin);

  app.mount('#app');
};
init();
