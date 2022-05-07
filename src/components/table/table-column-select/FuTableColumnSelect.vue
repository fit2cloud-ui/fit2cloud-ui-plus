<script lang="ts">
import { defineComponent, h } from 'vue'
import FuTableColumnSelectPopover from "./FuTableColumnSelectPopover.vue";
import FuTableColumnSelectDialog from "./FuTableColumnSelectDialog.vue";
export default defineComponent({
  name: 'FuTableColumnSelect',
  props: ["type"],
  setup(props, context) {
    console.log(context)
    console.log(props)
    const { type } = props
    return () => {
      // if (type === "dialog") {
      //   return h(FuTableColumnSelectDialog, context, context)
      // } else {
      //   return h(FuTableColumnSelectPopover, context, context)
      // }
    }

  }

})
</script>

