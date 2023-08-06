<template>
  <div class="control-panel">
    <search-repositories-input
      placeholder="Название репозитория"
      v-model="inputValue"
    />
    <search-button />
  </div>
</template>

<script setup lang="ts">
  import SearchRepositoriesInput from '@/pages/repositories-list/components/search-repositories-input/search-repositories-input.vue';
  import SearchButton from '@/pages/repositories-list/components/search-button/search-button.vue';
  import { ref } from 'vue';
  const inputValue = ref('');
</script>

<style scoped lang="scss">
  .control-panel {
    margin-top: 30px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>
