<template>
  <div class="repository-card">
    <div class="repository-card__header">
      <div class="repository-card__header-title">{{ title }}</div>
      <div class="repository-card__header-stars">
        <img
          class="repository-card__header-stars__img"
          src="@/assets/img/star.svg"
          alt="star"
        />
        <div>{{ stars }}</div>
      </div>
    </div>
    <div class="repository-card__main">
      <p>Дата последнего коммита: {{ dateInLocalString(lastCommitDate) }}</p>
      <a class="repository-card__main-link" :href="githubLink"
        >Ссылка на Github: {{ githubLink }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RepositoryCardProps } from '@/modules/repositories-list/components/repository-card/types/repository-card-props';
  import { dateInLocalString } from '@/shared/utils/date';
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
    flex-direction: column;
    gap: 30px;
    &__header {
      display: flex;
      align-items: center;
      gap: 20px;
      &-title {
        font-size: 30px;
      }
      &-stars {
        display: flex;
        align-items: center;
        gap: 5px;
        &__img {
          width: 30px;
        }
      }
    }
    &__main {
      display: flex;
      flex-direction: column;
      gap: 15px;
      &-link {
        color: colors.$black;
      }
    }
  }
</style>
