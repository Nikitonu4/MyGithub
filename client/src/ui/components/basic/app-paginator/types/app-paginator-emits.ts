export type AppPaginatorEmits = {
  (e: 'update:modelValue', value: number): void;
  (e: 'nextClick'): void;
  (e: 'prevClick'): void;
};
