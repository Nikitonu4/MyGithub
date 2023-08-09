<template>
  <div class="repository-card">
    <div class="repository-card__header">
      <div class="repository-card__header-title">
        <skeleton-loader width="100px" height="30px" />
      </div>
      <div class="repository-card__header-stars">
        <skeleton-loader width="50px" height="30px" />
      </div>
    </div>
    <div class="repository-card__main">
      <skeleton-loader type="text" />
      <skeleton-loader type="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkeletonLoader from '@/ui/components/basic/skeleton-loader/skeleton-loader.vue';
</script>

<style scoped lang="scss">
  @use '@/assets/styles/colors' as colors;
  .repository-card {
    cursor: pointer;
    padding: 30px 30px;
    border-radius: 4px;
    border: 3px solid colors.$black;
    box-shadow: 0.5rem 0.5rem 0 colors.$black;
    display: flex;
    flex-direction: column;
    gap: 30px;
    &__header {
      display: flex;
      align-items: center;
      gap: 20px;
      &-stars {
        display: flex;
      }
    }
    &__main {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
</style>
