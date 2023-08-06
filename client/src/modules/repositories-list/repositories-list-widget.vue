<template>
  <section>
    <div class="control-panel">
      <search-repositories-input
        placeholder="Название репозитория"
        v-model="inputValue"
      />
      <search-button />
    </div>
    <h1 class="error-cards" v-if="isError">Что-то пошло не так:(</h1>
    <div v-else class="cards-list">
      <repository-card
        v-for="repository in repositories"
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
  import { ref } from 'vue';
  import RepositoryCard from '@/modules/repositories-list/components/repository-card/repository-card.vue';
  import { useUserRepositoriesQuery } from '@/modules/repositories-list/api/user-repositories';
  const inputValue = ref('');

  const { isError, data: repositories } = useUserRepositoriesQuery({
    username: 'Nikitonu4',
    per_page: 10,
    page: 1,
  });
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
