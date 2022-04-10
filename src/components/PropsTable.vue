<template>
  <div class="props-table">
    <div
      v-for="(value ,key) in finalProps"
      :key="key"
      class="props-item"
    >
      <component
        v-if="value"
        :is="value.component"
        :value="value.value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { TextComponentProps } from '@/defaultProps';
import { computed, defineComponent, PropType } from 'vue';
import { reduce } from 'lodash-es';
import { mapPropsToForms, PropsToForms } from '../propsMap';

export default defineComponent({
  name: 'props-table',
  props: {
    props: {
      type: Object as PropType<TextComponentProps>,
      required: true,
    }
  },
  setup(props) {
    console.log(props.props);
    const finalProps = computed(() => {
      return reduce(props.props, (result, value, key) => {
        const newKey = key as keyof TextComponentProps;
        const item = mapPropsToForms[newKey];
        if (item) {
          item.value = value;
          result[newKey] = item;
        }
        return result;
      }, {} as PropsToForms);
    });
    console.log(finalProps);
    return {
      finalProps
    };
  },
});
</script>
