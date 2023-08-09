<template>
  <section>
    <h1 v-if="isErrorRepo">Ошибка при получении репозитория:(</h1>
    <repository-info
      :title="repoInfo?.name || ''"
      :stars="repoInfo?.stargazers_count || 0"
      :last-commit-date="repoInfo?.updated_at"
      :owner-avatar-src="avatarUrl"
      :owner-login="ownerLogin"
      :owner-url="ownerUrl"
      :description="description"
      :is-loading-languages="isLanguagesFetching"
      :languages-badges="languagesBadges"
    />
  </section>
</template>

<script setup lang="ts">
  import { useRepositoryQuery } from '@/modules/repository-detail-card/api/repository';
  import { useRoute } from 'vue-router';
  import RepositoryInfo from '@/modules/repository-detail-card/components/repository-info/repository-info.vue';
  import { useRepositoryLanguagesQuery } from '@/modules/repository-detail-card/api/languages';
  import { computed } from 'vue';
  // TOOD: поправить ошибки в консоли, проверить optional chaining
  const route = useRoute();
  const { isError: isErrorRepo, data: repoInfo } = useRepositoryQuery({
    repo: route.params.repo,
    owner: route.params.owner,
  });

  const { isFetching: isLanguagesFetching, data: languagesInfo } =
    useRepositoryLanguagesQuery({
      repo: route.params.repo,
      owner: route.params.owner,
    });

  const avatarUrl = computed(() => repoInfo.value?.owner?.avatar_url);
  const ownerLogin = computed(() => repoInfo.value?.owner?.login);
  const ownerUrl = computed(() => repoInfo.value?.owner?.url);
  const languagesBadges = computed(() =>
    Object.keys(languagesInfo?.value || {})
  );
  const description = computed(() => repoInfo.value?.description || '');
  // TODO: вынести?
</script>
