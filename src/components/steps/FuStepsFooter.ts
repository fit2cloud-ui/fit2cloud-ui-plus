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

    const isFirst = computed(()=>{
      return stepper.isFirst(stepper.index);
    })
    const isLast = computed(()=>{
      return stepper.isLast(stepper.index);
    })

    const showCancel = computed(()=>{
      return stepper.showCancel !== false;
    })

    const disabled = computed(()=>{
      return stepper?.isLoading || disabledButton.value;
    })

    function clickHandle(fnName: string) {
        stepper[fnName]
          ? stepper[fnName]()
          : emit("stepperFn", fnName);
        disabledButton.value = true;
        setTimeout(() => {
          disabledButton.value = false;
        }, 500);
      }
      return{
        stepper,
        disabledButton,
        isFirst,
        isLast,
        showCancel,
        disabled,
        clickHandle
      }
    },
    render() {

      const button = (value: string) => {
        return h(
          'el-button',
          {
            disabled: this.disabled,
            size: this.stepper.buttonSize,   // configSize
            onClick: () => this.clickHandle(value)
          },
          this.stepper[`${value}ButtonText`]
        );
      };
      return h(
        'div',
        {
          class: `fu-steps__footer--${this.stepper.footerAlign}`,
        },
        [
          h(
            'div',
            {
              class: 'fu-steps__footer--block',
              style: 'margin-right:10px'
            },
            this.showCancel && button("cancel")
          ),
          h(
            'div',
            {
              class: 'fu-steps__footer--block',
            },
            [
              !this.isFirst && button("prev"),
              this.isLast ? button("finish") : button("next")
            ]
          ),
        ]
      );
    },

})

