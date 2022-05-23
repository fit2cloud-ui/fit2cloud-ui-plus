<script lang="ts">
import { ref, watch, defineComponent, h, nextTick } from 'vue'
import { uuid } from "@/tools/utils"

const TRIGGERS = ['manual', 'click', 'dblclick']

export default defineComponent({
  name: "FuReadWriteSwitch",
  props: {
    value: Boolean,
    data: [String, Number, Boolean],
    writeTrigger: {
      type: String,
      default: "click",
      validator: (value: string) => {
        return TRIGGERS.includes(value)
      }
    }
  },

  setup(props, { emit }) {
    const id = ref(uuid())
    const write = ref(props.value === undefined ? false : props.value)
    watch(() => props.value, (v) => {
      if (v === write.value) return

      if (v) {
        switchWrite()
      } else {
        switchRead()
      }
    })

    function change() {
      emit("input", write.value)
      emit("change", [props.data, write.value])
    }
    function switchWrite() {
      write.value = true
      nextTick(() => {
        // 目前只支持input和textarea自动获取焦点
        const id = document.getElementById(id.value)
        const input = id?.querySelector("input")
        input?.click() // el-select等组件自动展开
        input?.focus()
        const textarea = id?.querySelector("textarea")
        textarea?.focus()

        // 可以在change事件自定义获取焦点
        change()
      })
    }
    function switchRead() {
      write.value = false
      change()
    }
    return {
      id,
      write,
      change,
      switchWrite,
      switchRead
    }
  },
  render() {
    const { data, write, $slots } = this

    const context = {
      class: "fu-read-write-switch",
      attrs: { id: this.id },
      on: {}
    }

    // 读状态添加触发写状态的事件
    if (!write && this.writeTrigger !== TRIGGERS[0]) {
      context.on[this.writeTrigger] = this.switchWrite
    }

    // 没有slot时显示文本数据
    let children = data

    // 读状态内容，提供切换到写状态的方法
    if (!write && $slots.read) {
      children = $slots.read({
        write: this.switchWrite
      })
    }

    // 写状态内容，提供切换到读状态的方法
    if (write && $slots.default) {
      children = $slots.default({
        read: this.switchRead
      })
    }

    return h("div", context, children)
  }

})
</script>
