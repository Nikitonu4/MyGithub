import { GithubPagination } from '@/shared/types/github-pagination';

export type RepositoriesListQuery = {
  q: string;
} & GithubPagination;
