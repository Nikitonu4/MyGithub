<template>
  <div class="chips-item">
    {{ label }}
  </div>
</template>
<script setup lang="ts">
  import { ChipsItemProps } from '@/ui/components/basic/chips-item/chips-item-props';

  defineProps<ChipsItemProps>();
</script>
<style scoped lang="scss">
  @use '@/assets/styles/colors' as colors;
  .chips-item {
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: colors.$green;
    font-size: 20px;
    font-weight: 400;
  }
</style>
