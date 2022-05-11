import { computed } from "vue";

export const tableColumnSelect = (localKey: any) => {

  const columnsKey = computed(() => {
    return localKey ? "FU-T-" + localKey : undefined
  })

  function dragstart(event: DragEvent, index: number) {
    event.dataTransfer.effectAllowed = "move"
    event.dataTransfer.setData("source_index", index)
  }
  function dragenter(event: DragEvent) {
    event.preventDefault()
    event.target.style.opacity = .2
  }
  function dragleave(event: DragEvent) {
    event.preventDefault()
    event.target.style.opacity = ""
  }
  function dragend(event: DragEvent) {
    event.dataTransfer.clearData()
  }
  function drop(event: DragEvent, list: any, index: number) {
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
  return {
    columnsKey,
    dragstart,
    dragenter,
    dragleave,
    dragend,
    drop
  }
}
