export type UserRepositoryItem = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
} & Record<string, unknown>;
