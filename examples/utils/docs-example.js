import { getCurrentInstance, computed } from 'vue'

const { proxy }  = getCurrentInstance()
console.log( proxy )

export const examples = computed(() => proxy.$options.examples)

export default examples
