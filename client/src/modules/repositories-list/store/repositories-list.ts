import { defineStore } from 'pinia';
import axiosInstance from '@/shared/api/instance';
import {
  RepositoriesListItem,
  RepositoryItemFromList,
} from '@/modules/repositories-list/types/repositories-list-item';
import { UserRepositoryItem } from '@/modules/repositories-list/types/user-repository-item';

interface IRepositoriesList {
  isFetching: boolean;
  isError: boolean;
  search: string;
  repositories: RepositoryItemFromList[] | UserRepositoryItem[];
}
/** Управление логикой списка репозиториев */
export const useRepositoriesListStore = defineStore('repositoriesList', {
  state: (): IRepositoriesList => ({
    isFetching: false,
    isError: false,
    search: '',
    repositories: [],
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
              per_page: 10,
              page: 1,
              q: this.search,
            },
          }
        );
        return data.items;
      } catch (e) {
        this.isError = true;
        throw e;
      } finally {
        this.isFetching = false;
      }
    },
    /** Получение всех репозиториев пользователя */
    async getUserRepositories(): Promise<UserRepositoryItem[]> {
      try {
        const { data } = await axiosInstance.get<UserRepositoryItem[]>(
          // `users/${query.username}/repos`,
          `users/Nikitonu4/repos`,
          {
            params: {
              per_page: 10,
              page: 1,
            },
          }
        );
        return data;
      } catch (e) {
        this.isError = true;
        throw e;
      } finally {
        this.isFetching = false;
      }
    },
    /** Действия по поиску репозиториев */
    async searchRepositories() {
      if (this.search) {
        this.repositories = await this.getSearchedRepositories();
      } else {
        this.repositories = await this.getUserRepositories();
      }
    },
  },
});
