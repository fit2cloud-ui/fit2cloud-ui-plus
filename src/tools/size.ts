const COMPONENTS_SIZE = ['', 'default', 'small', 'large'];

export type ComponentSize = typeof COMPONENTS_SIZE[number]

export const validateSize = (val: string): val is ComponentSize | "" =>
["", ...COMPONENTS_SIZE].includes(val)
