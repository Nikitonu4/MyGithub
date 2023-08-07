<template>
  <section>
    <div class="control-panel">
      <search-repositories-input
        placeholder="Название репозитория"
        v-model="repositoriesStore.search"
      />
      <search-button @click="toSearch()" />
    </div>
    <repository-card-skeleton v-if="repositoriesStore.isFetching" />
    <h1 class="error-cards" v-else-if="repositoriesStore.isError">
      Что-то пошло не так:(
    </h1>
    <div v-else class="cards-list">
      <repository-card
        v-for="repository in repositoriesStore.repositories"
        :key="repository.id"
        @click="$router.push(repository.full_name)"
        :title="repository.name"
        :github-link="repository.html_url"
        :stars="repository.stargazers_count"
        :last-commit-date="repository.updated_at"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import SearchRepositoriesInput from '@/modules/repositories-list/components/search-repositories-input/search-repositories-input.vue';
  import SearchButton from '@/modules/repositories-list/components/search-button/search-button.vue';
  import RepositoryCard from '@/modules/repositories-list/components/repository-card/repository-card.vue';
  import RepositoryCardSkeleton from '@/modules/repositories-list/components/repository-card/repository-card-skeleton.vue';
  import { useRepositoriesListStore } from '@/modules/repositories-list/store/repositories-list';
  import { useRoute, useRouter } from 'vue-router';

  const repositoriesStore = useRepositoriesListStore();
  const route = useRoute();
  const router = useRouter();

  // Устанавливаем значение поиска если уже есть что-то в строке браузера
  repositoriesStore.search = String(route.query.search ?? '');

  repositoriesStore.searchRepositories();

  /** Поиск репозиториев */
  const toSearch = async () => {
    await repositoriesStore.searchRepositories();
    const query = { ...route.query, search: repositoriesStore.search };
    await router.replace({ query });
  };
</script>

<style scoped lang="scss">
  .control-panel {
    display: flex;
    margin-bottom: 100px;
  }
  .cards-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .error-cards {
    font-size: 50px;
    font-weight: 800;
  }
</style>
