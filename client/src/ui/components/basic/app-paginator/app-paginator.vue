<template>
  <div class="app-paginator">
    <div
      class="app-paginator__arrow app-paginator__box app-paginator__arrow-left"
      :class="{ disabled: isDisabledPrev }"
      @click="clickPrev"
    >
      Prev
    </div>
    <div
      @click="$emit('update:modelValue', index + 1)"
      :class="getClassesItem(index)"
      v-for="(_, index) in Array(10)"
    >
      {{ index + 1 }}
    </div>
    <div
      class="app-paginator__arrow app-paginator__box app-paginator__arrow-right"
      :class="{ disabled: isDisabledNext }"
      @click="clickNext"
    >
      Next
    </div>
  </div>
</template>
<script setup lang="ts">
  import { AppPaginatorProps } from '@/ui/components/basic/app-paginator/types/app-paginator-props';
  import { AppPaginatorEmits } from '@/ui/components/basic/app-paginator/types/app-paginator-emits';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<AppPaginatorProps>(), {
    total: 10,
  });
  const emits = defineEmits<AppPaginatorEmits>();
  const getClassesItem = (page: number) => [
    'app-paginator__item',
    'app-paginator__box',
    {
      'app-paginator__item-active': page === props.modelValue - 1,
    },
  ];

  const isDisabledPrev = computed(() => props.modelValue - 1 <= 0);
  const clickPrev = () => {
    if (!isDisabledPrev.value) {
      emits('prevClick');
    }
  };

  const isDisabledNext = computed(() => props.modelValue - 1 >= props.total);
  const clickNext = () => {
    if (!isDisabledNext.value) {
      emits('nextClick');
    }
  };
</script>

<style scoped lang="scss">
  @use '@/assets/styles/colors' as colors;

  $border-fill: 2px solid colors.$gray-light;

  .app-paginator {
    border-radius: 8px;
    display: inline-block;
    border: $border-fill;
    box-shadow: 0.5rem 0.5rem 0 colors.$black;
    height: 55px;
    &__arrow {
      &-left {
        border-right: $border-fill;
      }
      &-right {
        border-left: $border-fill;
      }
    }
    &__box {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      height: 100%;
    }
    &__item {
      &:hover:not(&-active) {
        color: colors.$green;
      }
      &-active {
        position: relative;
        font-weight: 700;
        border: 2px solid colors.$black;
      }
    }
  }
  .disabled {
    cursor: not-allowed;
    color: colors.$gray-light;
  }
</style>
