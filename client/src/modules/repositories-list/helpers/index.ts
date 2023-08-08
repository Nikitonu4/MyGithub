/** максимально допустимое кол-во страниц */

const MAX_SAFE_PAGES = 10;
/** Получить кол-во страниц исходя из общего кол-ва и лимита */
export const getTotalPages = (totalCount: number, limit: number) => {
  const totalPages = Math.ceil(totalCount / limit);
  return totalPages < MAX_SAFE_PAGES ? totalPages : MAX_SAFE_PAGES;
};
