import { GithubPagination } from '@/shared/types/github-pagination';

export type UserRepositoryQuery = {
  username: string;
} & GithubPagination;
