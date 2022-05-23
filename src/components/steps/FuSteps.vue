<script lang="ts">
import { defineComponent, h } from 'vue'
import FuHorizontalSteps from "./FuHorizontalSteps.vue";
import FuVerticalSteps from "./FuVerticalSteps.vue";

export default defineComponent({
    name: 'FuSteps',
    props: ["direction"],
    setup(props, context) {
        const { direction } = props
        return () => {
            if (direction === "vertical") {
                return h(FuVerticalSteps, context.attrs, context.slots)
            } else {
                return h(FuHorizontalSteps, context.attrs, context.slots)
            }
        }
    }

})
</script>

