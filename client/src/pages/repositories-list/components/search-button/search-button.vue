<template>
  <button class="search-button">Искать</button>
</template>

<script setup lang="ts">
  defineProps();
</script>

<style lang="scss">
  @use '@/assets/styles/colors' as colors;
  $size-bezel: 0.5rem;

  .search-button {
    padding: 13px 10px;
    background: colors.$black;
    color: colors.$white;
    border-radius: 0 4px 4px 0;
  }
</style>
