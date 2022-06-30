import {InjectionKey, ComputedRef, Ref} from "vue";

export interface SpeedDialContext {
  config?: any,
  direction: ComputedRef<string>,
  active?: Ref<boolean>,
  close(): void
}


export const SpeedDialKey: InjectionKey<SpeedDialContext> = Symbol('SpeedDialKey')

