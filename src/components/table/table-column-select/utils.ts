import {computed} from "vue";

export const tableColumnSelect = () => {

  function dragstart(event: DragEvent, index: any) {
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("source_index", index)
    }
  }

  function dragenter(event: DragEvent) {
    event.preventDefault()
    let target = event.target as HTMLElement
    if (target) {
      target.style.opacity= ".2"
    }
  }

  function dragleave(event: DragEvent) {
    event.preventDefault()
    let target = event.target as HTMLElement
    if (target) {
      target.style.opacity = ""
    }
  }

  function dragend(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.clearData()
    }
  }

  function drop(event: DragEvent, list: any, index: number) {
    let target = event.target as HTMLElement
    let source_index = Number(event.dataTransfer?.getData("source_index"))
    let target_index = index
    if (target_index > source_index) {
      list.splice(target_index + 1, 0, list[source_index])
      list.splice(source_index, 1)
    } else {
      list.splice(target_index, 0, list[source_index])
      list.splice(source_index + 1, 1)
    }
    if (target) {
      target.style.opacity = ""
    }
  }

  return {
    dragstart,
    dragenter,
    dragleave,
    dragend,
    drop
  }
}
