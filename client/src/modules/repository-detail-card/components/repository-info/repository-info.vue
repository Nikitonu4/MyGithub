<template>
  <div class="repository-info">
    <div class="repository-info__owner">
      <img
        v-if="ownerAvatarSrc"
        class="repository-info__owner-img"
        :src="ownerAvatarSrc"
        alt="owner avatar"
      />
      <a :href="ownerUrl">
        {{ ownerLogin }}
      </a>
    </div>
    <div class="repository-info__header">
      <div class="repository-info__header-title">{{ title }}</div>
      <div class="repository-info__header-stars">
        <img
          class="repository-info__header-stars__img"
          src="@/assets/img/star.svg"
          alt="star"
        />
        <div>{{ stars }}</div>
      </div>
    </div>
    <div class="repository-info__updated">
      Дата последнего коммита: {{ dateInLocalString(lastCommitDate) }}
    </div>
    <div class="repository-info__languages">
      <p class="repository-info__languages-title">Используемые языки:</p>
      <div class="repository-info__languages-badges">
        <chips-item
          v-for="(lang, index) in languagesBadges"
          :key="`${lang}${index}`"
          :label="lang"
        />
      </div>
    </div>
    <div class="repository-info__description">
      <p class="repository-info__description-title">О репозитории:</p>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RepositoryInfoProps } from '@/modules/repository-detail-card/components/repository-info/types/repository-info-props';
  import { dateInLocalString } from '@/shared/utils/date';
  import ChipsItem from '@/ui/components/basic/chips-item/chips-item.vue';
  defineProps<RepositoryInfoProps>();
</script>

<style scoped lang="scss">
  @use '@/assets/styles/colors' as colors;
  .repository-info {
    padding: 60px 70px;
    border-radius: 4px;
    border: 3px solid colors.$black;
    box-shadow: 0.5rem 0.5rem 0 colors.$black;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    gap: 20px;
    &__owner {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      > a {
        font-size: 32px;
        font-weight: 400;
        text-decoration-line: underline;
      }
      &-img {
        border-radius: 50%;
        width: 57px;
        height: 57px;
      }
    }
    &__header {
      display: flex;
      align-items: center;
      gap: 20px;
      font-weight: 400;

      &-title {
        font-size: 40px;
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
    &__updated {
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-size: 32px;
      margin-bottom: 65px;
      &-link {
        color: colors.$black;
      }
    }
    &__languages {
      max-width: 300px;
      &-title {
        font-weight: 500;
      }
      &-badges {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
    }
    &__description {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 30px;
      &-title {
        font-weight: 500;
      }
    }
  }
</style>
