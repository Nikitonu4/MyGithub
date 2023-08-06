/** Форматирование даты в формат приложения */
export const dateInLocalString = (date: string) =>
  new Date(date).toLocaleString('ru');
