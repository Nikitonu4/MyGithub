import axiosInstance from '@/shared/api/instance';
import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { RepositoryQuery } from '@/modules/repository-detail-card/types/repository-query';
import { RepositoryItem } from '@/modules/repository-detail-card/types/repository-item';

/**
 * Получение детальной информации репозитория по имени владельца и названию
 */
async function getRepository(query: RepositoryQuery): Promise<RepositoryItem> {
  const { data } = await axiosInstance.get<RepositoryItem>(
    `repos/${query.owner}/${query.repo}`
  );
  return data;
}

/**
 * Хук получения детальной репозитория
 */
export function useRepositoryQuery(
  query: RepositoryQuery,
  options: UseQueryOptions = {}
) {
  return useQuery(['repository', query], () => getRepository(query), options);
}
