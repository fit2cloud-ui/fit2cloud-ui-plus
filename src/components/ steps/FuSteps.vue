<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import FuHorizontalSteps from './FuHorizontalSteps.vue';
import FuVerticalSteps from './FuVerticalSteps.vue';

export default defineComponent({
  name: 'FuSteps',
  components: {
    FuHorizontalSteps,
    FuVerticalSteps,
  },
  emits: ['change'],
  props: ['direction'],
  setup(props, { attrs, slots, emit, expose }) {
    const { direction } = props;
    const FuSteps = ref<HTMLElement>();
    function next() {
      FuSteps.value?.next();
    }
    function prev() {
      FuSteps.value?.prev();
    }

    function active(index: number) {
      FuSteps.value?.active(index);
    }

    function handleChange({ id, title, index }: any) {
      emit('change', { id, title, index });
    }
    expose({
      next,
      prev,
      active,
    });
    if (direction === 'vertical') {
      return () => h(FuVerticalSteps, { ref: FuSteps, onChange: handleChange, ...attrs }, slots);
    } else {
      return () => h(FuHorizontalSteps, { ref: FuSteps, onChange: handleChange, ...attrs }, slots);
    }
  },
});
</script>
