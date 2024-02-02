<script setup lang="ts">
import { css } from '../styled-system/css';
import Button from './components/Button.vue';
</script>

<template>
  <h1
    :class="
      css({ textStyle: 'hero', color: 'primary', fontFamily: 'soleilSemiBold' })
    "
  >
    Components-panda
  </h1>
  <div :class="css({ display: 'flex', flexDir: 'column' })">
    <Button visual="primary" size="md" label="primary" />
    <Button visual="secondary" size="xl" label="secondary" />
    <Button visual="outlinePrimary" size="xl" label="outlinePrimary" />
    <Button visual="text" size="xl" label="text" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
