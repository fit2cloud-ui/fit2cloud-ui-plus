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

  setup(props, { slots, emit }) {
    const id = ref(uuid())
    const write = ref(props.value === undefined ? false : props.value)
    watch(() => props.value, (v) => {
          console.log(v)
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
    
    const context: any = {
      class: "fu-read-write-switch",
      attrs: { id: id.value },
      on: {}
    }

    // 读状态添加触发写状态的事件
    if (!write.value && props.writeTrigger !== TRIGGERS[0]) {
      context.on[props.writeTrigger] = switchWrite
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

     return () => h("div", context, children)
  }

})
</script>
