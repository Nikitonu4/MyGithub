<template>
  <div class="repository-info">
    <div class="repository-info__header">
      <div class="repository-info__header-back" @click="$router.back()">
        <img
          class="repository-info__header-back-link"
          src="@/assets/img/back-arrow.svg"
          alt="back"
        />
        <div>Назад</div>
      </div>
      <div class="repository-info__header-owner">
        <img
          v-if="ownerAvatarSrc"
          class="repository-info__header-owner-img"
          :src="ownerAvatarSrc"
          alt="owner avatar"
        />
        <a class="repository-info__header-owner-login" :href="ownerUrl">
          {{ ownerLogin }}
        </a>
      </div>
    </div>
    <div class="repository-info__main">
      <div class="repository-info__main-title">{{ title }}</div>
      <div class="repository-info__main-stars">
        <img
          class="repository-info__main-stars__img"
          src="@/assets/img/star.svg"
          alt="star"
        />
        <div>{{ stars }}</div>
      </div>
    </div>
    <div class="repository-info__updated">
      Дата последнего коммита: {{ dateInLocalString(lastCommitDate) }}
    </div>
    <div class="repository-info__languages" v-if="languagesBadges.length">
      <p class="repository-info__languages-title">Используемые языки:</p>
      <div class="repository-info__languages-badges">
        <chips-item
          v-for="(lang, index) in languagesBadges"
          :key="`${lang}${index}`"
          :label="lang"
        />
      </div>
    </div>
    <div class="repository-info__description" v-if="description">
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
    padding: 40px 70px;
    border-radius: 4px;
    border: 3px solid colors.$black;
    box-shadow: 0.5rem 0.5rem 0 colors.$black;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    gap: 20px;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      &-back {
        color: colors.$gray-light;
        font-size: 32px;
        font-weight: 400;
        display: flex;
        gap: 15px;
        cursor: pointer;
      }
      &-owner {
        display: flex;
        align-items: center;
        &-login {
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
    }
    &__main {
      margin-top: 40px;
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
      max-width: 500px;
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
