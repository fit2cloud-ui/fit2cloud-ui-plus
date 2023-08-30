<script lang="ts">
import { ref, watch, defineComponent, h,provide } from 'vue'
import FuVerticalNavigation from "./FuVerticalNavigation.vue";
import FuStepsFooter from "./FuStepsFooter";
import { Stepper, Step } from "./Stepper";

export default defineComponent({
  name: "FuVerticalSteps",
  components: { FuVerticalNavigation, FuStepsFooter },

  emits: ['change'],

  setup(_, { attrs, slots, emit, expose }) {
    const stepper = ref(new Stepper)
    stepper.value.activeSet.add(0)
    watch(() => stepper.value.index, (value) => {
      emit("change", stepper.value.steps[value]);
    })

    function active(index: number) {
      stepper.value.active(index);
    }
    function disable(index: number) {
      return !stepper.value.isActive(index);
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

    provide('stepper', stepper.value)

    expose({
      next,
      prev,
      active
    });

    return () => {
      let currentNode: any;
      let steps: any = [];
      if (slots.default?.()) {
        slots.default?.().forEach((node, index) => {
          const options = {
            index: index,
            ...node.props,
          };
          const step = new Step(options);
          steps.push(step);
          if (stepper.value.isCurrent(index)) {
          currentNode = node;
        }
        });
      }
      stepper.value.steps = steps;
      stepper.value = Object.assign(stepper.value, attrs);

      return h(
        'div',
        {
          class: ['fu-steps', 'fu-steps--vertical']
        },
        [
          h(
            FuVerticalNavigation,
            {
              stepper: stepper.value,
              steps: steps,
              disable: disable,
              onActive: active
            },
            ()=> currentNode
          ),
          h(
            'div',
            { class: 'fu-steps__footer' },
            h(FuStepsFooter, { onStepperFn: $func })
          )
        ]
      )

    }
  }

})
</script>

