<template>
  <section class="repo-list-widget">
    <div class="repo-list-widget__content">
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
    </div>
    <div
      v-if="repositoriesStore.paginator.limit < repositoriesStore.totalItems"
    >
      <app-paginator
        :model-value="repositoriesStore.paginator.page"
        :total="repositoriesStore.totalItems"
        @next-click="updatePage(repositoriesStore.paginator.page + 1)"
        @prev-click="updatePage(repositoriesStore.paginator.page - 1)"
        @update:model-value="updatePage"
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
  import AppPaginator from '@/ui/components/basic/app-paginator/app-paginator.vue';

  const repositoriesStore = useRepositoriesListStore();
  const route = useRoute();
  const router = useRouter();

  // Устанавливаем значение поиска если уже есть что-то в строке браузера
  repositoriesStore.search = String(route.query.search ?? '');
  repositoriesStore.paginator.page =
    Number(route.query?.page) > 0 ? Number(route.query.page) : 1;

  repositoriesStore.searchRepositories();

  /** Поиск репозиториев */
  const toSearch = async () => {
    await repositoriesStore.searchRepositories();
    const query = { ...route.query, search: repositoriesStore.search };
    await router.replace({ query });
  };

  /** Обновление пагинации */
  const updatePage = async (page: number) => {
    repositoriesStore.paginator.page = page;
    await repositoriesStore.searchRepositories();
    const query = { ...route.query, page };
    await router.replace({ query });
  };
</script>

<style scoped lang="scss">
  .repo-list-widget {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    &__content {
      flex: 1;
      margin-bottom: 80px;
    }
  }
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
