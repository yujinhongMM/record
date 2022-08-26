import type { InjectionKey } from "@vue/runtime-core"
import { GlobalDataInter } from './constant';

export const globalKey = Symbol() as InjectionKey<GlobalDataInter>;
export const langKey = Symbol() as InjectionKey<object>;