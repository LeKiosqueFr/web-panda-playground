<template>
  <Button size="lg" visual="primary">
    {{ label }}
  </Button>
</template>

<script lang="ts" setup>
import { Button } from 'components-panda';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    visual?: 'primary' | 'secondary' | 'outlined';
    /**
     * size of the button
     */
    size?: 'sm' | 'md' | 'lg';
  }>(),
  { visual: 'outlined' },
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click', 1);
};
</script>
