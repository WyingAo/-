import { useIntersectionObserver } from '@vueuse/core'
import {ref } from 'vue'
export function useLazyData(apiFn:()=>void){
    const target = ref(null)
    const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
        if(isIntersecting){
            stop()
            apiFn()
        }
    })
    return target
}