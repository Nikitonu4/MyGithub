<template>
  <div class="skeleton-loader" :style="styleSkeleton" />
</template>
<script setup lang="ts">
  import { SkeletonLoaderProps } from '@/ui/components/basic/skeleton-loader/types/skeleton-loader-props';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<SkeletonLoaderProps>(), {
    type: 'rect',
    width: '100%',
    height: '10px',
  });

  const styleSkeleton = computed(() => ({
    width: props.width,
    height: props.height,
  }));
</script>

<style scoped lang="scss">
  .skeleton-loader {
    animation: skeleton-animation 2s linear infinite;
  }

  @keyframes skeleton-animation {
    0% {
      background-color: #eee;
    }

    50% {
      background-color: #cecece;
    }

    100% {
      background-color: #eee;
    }
  }
</style>
