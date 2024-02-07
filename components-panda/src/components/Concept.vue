<script lang="ts" setup>
import { ref } from 'vue';
import { css } from '../../styled-system/css';
import { Token, token } from '../../styled-system/tokens';

/*////////
// Props //
////////*/

interface IProps {
  id: string;
  name: string;
  color: string;
}

defineProps<IProps>();

const emits = defineEmits<{
  (e: 'itemClicked', id: string): void;
}>();
/*/////////
// Store //
/////////*/

/*////////////
// Computed //
////////////*/

/*/////////////
// Variables //
/////////////*/
const isSelected = ref(false);
/*//////////////
// Life cycle //
//////////////*/

/*///////////
// Methods //
///////////*/

/*////////////
// Watchers //
////////////*/
</script>

<template>
  <div>
    <div
      :class="
        css({
          width: '100px',
          height: '100px',
          borderRadius: '8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'end',
          margin: '0.5rem 0.9rem',
          cursor: 'pointer',
          color: 'content.white',
        })
      "
      :style="`background-color: ${(token(`colors.${color}` as Token))}`"
      @click="emits('itemClicked', id)"
    >
      <div v-if="isSelected" class="category_check">
        <span class="icon-lk-check"></span>
      </div>
      <p
        id="categoryTitle"
        :class="
          css({
            textStyle: 'info',

            textAlign: 'center',
            color: isSelected ? 'brands.white' : 'brands.dark',
          })
        "
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>
