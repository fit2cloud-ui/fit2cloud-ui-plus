import {
  defineComponent,
  h,
  inject,
  ref,
  computed
} from 'vue'
export default defineComponent({
  name: "FuStepsFooter",
  setup(props, { emit }) {
    const stepper = inject('stepper')
    const disabledButton = ref(false)

    const isFirst = computed(() => {
      return stepper.isFirst(stepper.index);
    })
    const isLast = computed(() => {
      return stepper.isLast(stepper.index);
    })

    const showCancel = computed(() => {
      return stepper.showCancel !== false;
    })

    const disabled = computed(() => {
      return stepper?.isLoading || disabledButton.value;
    })
    const button = (value: string) => {
      return h(
        'el-button',
        {
          disabled: disabled,
          size: stepper.buttonSize,   // configSize
          onClick: () => clickHandle(value)
        },
        stepper[`${value}ButtonText`]
      );
    };

    function clickHandle(fnName: string) {
      stepper[fnName]
        ? stepper[fnName]()
        : emit("stepperFn", fnName);
      disabledButton.value = true;
      setTimeout(() => {
        disabledButton.value = false;
      }, 500);
    }
    return () => {
      return h(
        'div',
        {
          class: `fu-steps__footer--${stepper.footerAlign}`,
        },
        [
          h(
            'div',
            {
              class: 'fu-steps__footer--block',
              style: 'margin-right:10px'
            },
            showCancel && button("cancel")
          ),
          h(
            'div',
            {
              class: 'fu-steps__footer--block',
            },
            [
              !isFirst && button("prev"),
              isLast ? button("finish") : button("next")
            ]
          ),
        ]
      );
    }
  }
})

