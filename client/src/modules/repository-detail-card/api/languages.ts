import axiosInstance from '@/shared/api/instance';
import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { LanguagesItem } from '@/modules/repository-detail-card/types/languages-item';
import { LanguagesQuery } from '@/modules/repository-detail-card/types/languages-query';

/**
 * Получение языков программирования для репозитория
 */
async function getRepositoryLanguages(
  query: LanguagesQuery
): Promise<LanguagesItem> {
  const { data } = await axiosInstance.get<LanguagesItem>(
    `repos/${query.owner}/${query.repo}/languages`
  );
  return data;
}

/**
 * Хук получения языков программирования по репозиторию
 */
export function useRepositoryLanguagesQuery(
  query: LanguagesQuery,
  options: UseQueryOptions = {}
) {
  return useQuery(
    ['repositoryLanguages', query],
    () => getRepositoryLanguages(query),
    options
  );
}
