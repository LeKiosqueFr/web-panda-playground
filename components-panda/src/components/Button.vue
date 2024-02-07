<script setup lang="ts">
import { button, type ButtonVariantProps } from 'styled-system/recipes';

interface ButtonProps extends /** @vue-ignore */ ButtonVariantProps {}

defineProps<{
  label: string;
  visual: ButtonProps['visual'];
  size: ButtonProps['size'];
}>();
</script>

<template>
  <button type="button" :class="button({ visual: visual, size: size })">
    {{ label }}
  </button>
</template>
