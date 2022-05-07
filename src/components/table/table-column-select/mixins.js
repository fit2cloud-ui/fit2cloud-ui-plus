import Locale from "@/mixins/locale";
import ConfigSize from "@/mixins/config-size";

export default {
  mixins: [Locale, ConfigSize],
  props: {
    icon: {
      type: String,
      default: "el-icon-s-grid"
    },
    columns: Array,
    localKey: String
  },
  computed: {
    columnsKey() {
      return this.localKey ? "FU-T-" + this.localKey : undefined
    },
  },
  methods: {
    dragstart(event, index) {
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("source_index", index)
    },
    dragenter(event) {
      event.preventDefault()
      event.target.style.opacity = .2
    },
    dragleave(event) {
      event.preventDefault()
      event.target.style.opacity = ""
    },
    dragend(event) {
      event.dataTransfer.clearData()
    },
    drop(event, list, index) {
      let source_index = event.dataTransfer.getData("source_index")
      let target_index = index
      source_index = Number(source_index)
      if (target_index > source_index) {
        list.splice(target_index + 1, 0, list[source_index])
        list.splice(source_index, 1)
      } else {
        list.splice(target_index, 0, list[source_index])
        list.splice(source_index + 1, 1)
      }
      event.target.style.opacity = ""
    }
  }
};
