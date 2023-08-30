import { defineComponent, h, inject, ref, computed } from "vue";
import FuStepButton from "./FuStepButton.vue";
export default defineComponent({
  name: "FuStepsFooter",
  components: {
    FuStepButton,
  },
  emits: ["stepperFn"],
  setup(props, { emit }) {
    const stepper: any = inject("stepper");
    const disabledButton = ref(false);


    const isFirst = computed(() => {
      return stepper.isFirst(stepper.index);
    });
    const isLast = computed(() => {
      return stepper.isLast(stepper.index);
    });

    const showCancel = computed(() => {
      return stepper.showCancel !== false;
    });

    const disabled = computed(() => {
      return stepper?.isLoading || disabledButton.value;
    });

    function clickHandle(fnName: string) {
      stepper[fnName] ? stepper[fnName]() : emit("stepperFn", fnName);
      disabledButton.value = true;
      setTimeout(() => {
        disabledButton.value = false;
      }, 500);
    }
    const button = (value: string) => {
      return h(
        FuStepButton,
        {
          disabled: disabled.value,
          size: stepper.buttonSize,
          onClick: () => clickHandle(value),
        },
        () => stepper[`${value}ButtonText`]
      );
    };
    return () =>
      h(
        "div",
        {
          class: `fu-steps__footer--${stepper.footerAlign}`,
        },
        [
          h(
            "div",
            {
              class: "fu-steps__footer--block",
              style: "margin-right:10px",
            },
            [showCancel.value && button("onCancel")]
          ),
          h(
            "div",
            {
              class: "fu-steps__footer--block",
            },
            [
              !isFirst.value && button("prev"),
              isLast.value ? button("onFinish") : button("next"),
            ]
          ),
        ]
      );
  },
});
