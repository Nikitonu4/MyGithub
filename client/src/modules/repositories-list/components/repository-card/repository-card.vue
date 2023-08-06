<template>
  <div class="repository-card">
    <div class="repository-card__title">{{ title }}</div>
    <div class="repository-card__stars">
      <img
        class="repository-card__stars-img"
        src="@/assets/img/star.svg"
        alt="star"
      />
      <div>{{ stars }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RepositoryCardProps } from '@/modules/repositories-list/components/repository-card/types/repository-card-props';

  defineProps<RepositoryCardProps>();
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
    align-items: center;
    gap: 40px;
    &__title {
      font-size: 30px;
    }
    &__stars {
      display: flex;
      align-items: center;
      gap: 5px;
      &-img {
        width: 30px;
      }
    }
  }
</style>
