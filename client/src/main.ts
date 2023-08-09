import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/app.vue';
import router from '@/router/router';
import { createPinia } from 'pinia';

const init = () => {
  const app = createApp(App);

  const pinia = createPinia();
  app.use(pinia);
  app.use(router);
  app.use(VueQueryPlugin);

  app.mount('#app');
};
init();
