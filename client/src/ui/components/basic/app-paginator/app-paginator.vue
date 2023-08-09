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
      @click="$emit('update:modelValue', item.value)"
      :class="getClassesItem(item.value)"
      :key="item.value"
      v-for="item in fillPaginationControl"
    >
      {{ item.text }}
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
    maxVisiblePage: 10,
  });
  const emits = defineEmits<AppPaginatorEmits>();
  const getClassesItem = (page: number) => [
    'app-paginator__item',
    'app-paginator__box',
    {
      'app-paginator__item-active': page === props.modelValue,
    },
  ];

  const isDisabledPrev = computed(() => props.modelValue - 1 <= 0);
  const clickPrev = () => {
    if (!isDisabledPrev.value) {
      emits('prevClick');
    }
  };

  const isDisabledNext = computed(() => props.modelValue >= props.total);
  const clickNext = () => {
    if (!isDisabledNext.value) {
      emits('nextClick');
    }
  };

  const fillPaginationControl = computed(() => {
    const a = [];
    // Если элементов немного - выводим все страницы по порядку
    if (props.maxVisiblePage >= props.total) {
      for (let i = 0; i < props.total; i++) {
        a.push({
          text: `${i + 1}`,
          value: i + 1,
        });
      }
      return a;
    }

    /**
     * Если элементов много, то нужно скрывать за тремя точками(...).
     * При этом сначала заполняем все элементы до максимального кол-ва
     * Потом идут 3 точки
     * Потом идет еще один элемент, который будет служить последним
     */

    if (props.modelValue - props.maxVisiblePage >= 0) {
      for (
        let j = 0, i = props.modelValue - (props.maxVisiblePage - 1);
        j < props.maxVisiblePage;
        i++, j++
      ) {
        a.push({
          text: `${i}`,
          value: i,
        });
      }
    } else {
      for (let i = 1; i <= props.maxVisiblePage; i++) {
        a.push({
          text: `${i}`,
          value: i,
        });
      }
    }
    a.push({
      text: `...`,
      value: a[a.length - 1].value + 1,
    });
    a.push({
      text: `${props.total}`,
      value: props.total,
    });

    return a;
  });
</script>

<style scoped lang="scss">
  @use '@/assets/styles/colors' as colors;

  $border-fill: 2px solid colors.$gray-light;

  .app-paginator {
    border-radius: 5px;
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
