<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    class="search-repositories-input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
  />
</template>

<script setup lang="ts">
  import { SearchRepositoriesInputProps } from '@/pages/repositories-list/components/search-repositories-input/types/search-repositories-input-props';

  withDefaults(defineProps<SearchRepositoriesInputProps>(), {
    placeholder: '',
    modelValue: '',
  });
</script>

<style lang="scss">
  @use '@/assets/styles/colors' as colors;
  .search-repositories-input {
    display: block;
    outline: none;
    border: 3px solid colors.$black;
    padding: 13px 10px;
    color: colors.$black;
    background: transparent;
    border-radius: 4px 0 0 4px;
    &:focus {
      border-radius: 4px 0 0 4px;
    }
  }
</style>
