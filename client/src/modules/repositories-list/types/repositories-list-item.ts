export type RepositoriesListItem = {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryItemFromList[];
} & Record<string, unknown>;

export type RepositoryItemFromList = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
} & Record<string, unknown>;
