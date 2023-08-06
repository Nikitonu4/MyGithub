<template>
  <section>
    <div class="control-panel">
      <search-repositories-input
        placeholder="Название репозитория"
        v-model="inputValue"
      />
      <search-button />
    </div>
    <div class="cards-list">
      <repository-card
        v-for="repository in Array(100)"
        title="Тестовый репозиторий"
        github-link="123124"
        :stars="23"
        last-commit-date="21.02.1000"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import SearchRepositoriesInput from '@/modules/repositories-list/components/search-repositories-input/search-repositories-input.vue';
  import SearchButton from '@/modules/repositories-list/components/search-button/search-button.vue';
  import { ref } from 'vue';
  import RepositoryCard from '@/modules/repositories-list/components/repository-card/repository-card.vue';
  const inputValue = ref('');
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
</style>
