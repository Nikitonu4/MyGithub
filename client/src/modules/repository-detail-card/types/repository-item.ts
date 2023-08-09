export type RepositoryItem = {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  updated_at: string;
  description: string;
  owner: { avatar_url: string; login: string; url: string } & Record<
    string,
    unknown
  >;
} & Record<string, unknown>;
