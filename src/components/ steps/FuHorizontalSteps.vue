<script lang="ts">
import { ref, watch, defineComponent, h, computed, Transition, provide } from 'vue';
import FuHorizontalNavigation from './FuHorizontalNavigation.vue';
import FuStepsFooter from './FuStepsFooter';
import { Step, Stepper } from './Stepper';

export default defineComponent({
  name: 'FuHorizontalSteps',
  components: {
    FuHorizontalNavigation,
    FuStepsFooter,
  },

  emits: ['change'],

  setup(_, { attrs, slots, emit, expose }) {
    const stepper: any = ref(new Stepper());
    stepper.value?.activeSet.add(0);

    watch(
      () => stepper.value.index,
      (value) => {
        emit('change', stepper.value.steps[value]);
      }
    );

    const heightStyle = computed(() => {
      return { height: parseInt(stepper.value?.height) + 'px' || 'auto' };
    });

    function active(index: number) {
      stepper.value?.active(index);
    }

    function disable(index: number) {
      return !stepper.value?.isActive(index);
    }

    function next() {
      stepper.value.next();
    }
    function prev() {
      stepper.value.prev();
    }
    function $func(name: any) {
      emit(name);
    }
    provide('stepper', stepper.value);

    expose({
      next,
      prev,
      active,
    });
    return () => {
      let steps: any = [];
      if (slots.default?.()) {
        slots.default?.().forEach((node, index) => {
          const options = {
            index: index,
            ...node.props,
          };
          const step = new Step(options);
          steps.push(step);
        });
      }
      stepper.value.steps = steps;

      stepper.value = Object.assign(stepper.value, attrs);
      return h(
        'div',
        {
          class: ['fu-steps', 'fu-steps--horizontal'],
        },
        [
          h(FuHorizontalNavigation, {
            stepper: stepper.value,
            steps: steps,
            disable: disable,
            onActive: active,
          }),
          h(
            'div',
            { class: 'fu-steps__wrapper' },
            h(
              'div',
              { class: 'fu-steps__container', style: heightStyle.value },

              h(Transition, { name: 'carousel', mode: 'out-in', tag: 'p' }, () =>
                slots.default?.().map((item: any, index) => {
                  item['key'] = index;
                  return stepper.value.index === index && item;
                })
              )
            )
          ),
          h('div', { class: 'fu-steps__footer' }, slots.footer?.() || h(FuStepsFooter, { onStepperFn: $func })),
        ]
      );
    };
  },
});
</script>
