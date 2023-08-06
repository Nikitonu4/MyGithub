export type RepositoryInfoProps = {
  title: string;
  stars: number;
  lastCommitDate: string;
  ownerAvatarSrc: string;
  ownerLogin: string;
  ownerUrl: string;
  description: string;
  languagesBadges: string[];
  isLoadingLanguages: boolean;
};
