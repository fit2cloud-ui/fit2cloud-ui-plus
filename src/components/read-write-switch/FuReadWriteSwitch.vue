<script lang="ts">
import {ref, watch, defineComponent, h, nextTick} from 'vue'

const TRIGGERS = ['manual', 'onClick', 'onDblclick']

export default defineComponent({
  name: "FuReadWriteSwitch",
  props: {
    modelValue: Boolean,
    data: [String, Number, Boolean],
    writeTrigger: {
      type: String,
      default: "onClick",
      validator: (value: string) => {
        return TRIGGERS.includes(value)
      }
    }
  },

  setup(props, {slots, emit}) {
    const id = ref(crypto.randomUUID())
    const write = ref(props.modelValue)
    watch(() => props.modelValue, (v) => {
      if (v === write.value) return

      if (v) {
        switchWrite()
      } else {
        switchRead()
      }
    })

    function change() {
      emit("update:modelValue", write.value)
      emit("change", [props.data, write.value])
    }

    function switchWrite() {
      write.value = true

      nextTick(() => {
        // 目前只支持input和textarea自动获取焦点
        const nid = document.getElementById(id.value)
        const input = nid?.querySelector("input")
        input?.click() // el-select等组件自动展开
        input?.focus()
        const textarea = nid?.querySelector("textarea")
        textarea?.focus()

        // 可以在change事件自定义获取焦点
        change()
      })
    }

    function switchRead() {
      write.value = false
      change()
    }

    return () => {
      const context: any = {
        class: "fu-read-write-switch",
        id: id.value,
      }

      // 读状态添加触发写状态的事件
      if (!write.value && props.writeTrigger !== TRIGGERS[0]) {
        context[props.writeTrigger] = switchWrite
      }
      // 没有slot时显示文本数据
      let children: any = props.data

      // 读状态内容，提供切换到写状态的方法
      if (!write.value && slots.read) {
        children = slots.read({
          write: switchWrite
        })
      }

      // 写状态内容，提供切换到读状态的方法
      if (write.value && slots.default) {
        children = slots.default({
          read: switchRead
        })
      }

      return h("div", context, children)
    }
  }

})
</script>
