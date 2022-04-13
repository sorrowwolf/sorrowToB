<template>
  <div class="create-component-list">
    <div v-for="(item, index) in list" :key="index" class="component-item" @click="onItemClick(item)">
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LText from '../components/LText.vue';
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    LText
  },
  name: 'components-list',
  emits: ['on-item-click'],
  setup(props, context) {
    // eslint-disable-next-line
    const onItemClick = (data: any) => {
      context.emit('on-item-click', data);
    };
    return {
      onItemClick
    };
  }
});

</script>

<style>

</style>