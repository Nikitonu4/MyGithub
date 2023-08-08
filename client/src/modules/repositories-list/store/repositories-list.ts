import { defineStore } from 'pinia';
import axiosInstance from '@/shared/api/instance';
import {
  RepositoriesListItem,
  RepositoryItemFromList,
} from '@/modules/repositories-list/types/repositories-list-item';
import { UserRepositoryItem } from '@/modules/repositories-list/types/user-repository-item';
import { AppPaginator } from '@/shared/types/app-paginator';
import { getTotalPages } from '@/modules/repositories-list/helpers';

interface IRepositoriesList {
  isFetching: boolean;
  isError: boolean;
  search: string;
  totalPages: number;
  repositories: RepositoryItemFromList[] | UserRepositoryItem[];
  paginator: AppPaginator;
}
/** Управление логикой списка репозиториев */
export const useRepositoriesListStore = defineStore('repositoriesList', {
  state: (): IRepositoriesList => ({
    isFetching: false,
    isError: false,
    search: '',
    totalPages: 0,
    repositories: [],
    paginator: {
      page: 1,
      limit: 10,
    },
  }),
  actions: {
    /** Поиск репозиториев по строке */
    async getSearchedRepositories(): Promise<RepositoryItemFromList[]> {
      try {
        this.isFetching = true;
        const { data } = await axiosInstance.get<RepositoriesListItem>(
          `search/repositories`,
          {
            params: {
              per_page: this.paginator.limit,
              page: this.paginator.page,
              q: this.search,
            },
          }
        );
        this.totalPages = getTotalPages(data.total_count, this.paginator.limit);
        return data.items;
      } catch (e) {
        this.totalPages = 0;
        this.isError = true;
        throw e;
      } finally {
        this.isFetching = false;
      }
    },
    /** Получение всех репозиториев пользователя */
    async getUserRepositories(): Promise<UserRepositoryItem[]> {
      try {
        this.isFetching = true;
        const { data } = await axiosInstance.get<UserRepositoryItem[]>(
          // `users/${query.username}/repos`,
          `users/Nikitonu4/repos`,
          {
            params: {
              per_page: this.paginator.limit,
              page: this.paginator.page,
            },
          }
        );
        this.totalPages = getTotalPages(data.length, this.paginator.limit);
        return data;
      } catch (e) {
        this.totalPages = 0;
        this.isError = true;
        throw e;
      } finally {
        this.isFetching = false;
      }
    },
    /** Действия по поиску репозиториев */
    async searchRepositories() {
      this.isError = false;
      if (this.search) {
        this.repositories = await this.getSearchedRepositories();
      } else {
        this.repositories = await this.getUserRepositories();
      }
    },
  },
});
