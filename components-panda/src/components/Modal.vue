<script lang="ts" setup>
/*////////
// Props //
////////*/
interface Props {
  visibility: boolean;
  btnCloseFlat?: boolean;
  btnCloseShow: boolean;
}

const props = withDefaults(defineProps<Props>(), { btnCloseShow: true });

/*////////
// Emit //
////////*/

const emits = defineEmits<{
  (e: 'update:visibility', toggle: boolean): void;
  (e: 'closeModal'): void;
}>();

/*/////////
// Store //
/////////*/

/*////////////
// Computed //
////////////*/
const getBtnCloseClass = () => {
  return props.btnCloseFlat ? 'icon-lk-close' : 'btn-dot-close';
};

/*/////////////
// Variables //
/////////////*/

/*//////////////
// Life cycle //
//////////////*/

/*///////////
// Methods //
///////////*/

const closeModal = () => {
  emits('update:visibility', false);
  emits('closeModal');
};

/*////////////
// Watchers //
////////////*/
</script>

<template>
  <Transition :duration="550" name="modaltrans">
    <div v-if="props.visibility" class="modal outer">
      <div class="modal-blocker" @click="closeModal"></div>
      <div class="modal-content">
        <button
          v-if="btnCloseShow"
          @click="closeModal"
          class="modal-content-btnClose"
          :class="getBtnCloseClass()"
        ></button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
