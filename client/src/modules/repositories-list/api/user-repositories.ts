import axiosInstance from '@/shared/api/instance';
import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { UserRepositoryItem } from '@/modules/repositories-list/types/user-repository-item';
import { UserRepositoryQuery } from '@/modules/repositories-list/types/user-repository-query';

/**
 * Получение репозиториев пользователя
 */
async function getUserRepositories(
  query: UserRepositoryQuery
): Promise<UserRepositoryItem[]> {
  await new Promise((res) => setTimeout(res, 10000));
  const { data } = await axiosInstance.get<UserRepositoryItem[]>(
    `users/${query.username}/repos`,
    {
      params: {
        per_page: query.per_page,
        page: query.page,
      },
    }
  );
  return data;
}

/**
 * Хук получения репозиториев пользователя
 */
export function useUserRepositoriesQuery(
  query: UserRepositoryQuery,
  options: UseQueryOptions = {}
) {
  return useQuery(
    ['repositories', query],
    () => getUserRepositories(query),
    options
  );
}
