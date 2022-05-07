<script lang="ts">
import { defineComponent, h } from 'vue'
import FuTableColumnSelectPopover from "./FuTableColumnSelectPopover.vue";
import FuTableColumnSelectDialog from "./FuTableColumnSelectDialog.vue";

export default defineComponent({
    name: 'FuTableColumnSelect',
    props: ["type"],
    setup(props, context) {
        const { type } = props
        return () => {
            if (type === "dialog") {
                return h(FuTableColumnSelectDialog, context.attrs, context.slots)
            } else {
                return h(FuTableColumnSelectPopover, context.attrs, context.slots)
            }
        }
    }

})
</script>

