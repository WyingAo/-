import WyaSkeleton from '@/components/skeleton/index.vue'
declare module 'vue'{
    export interface GlobalComponents {
        XtxSkeleton: typeof XtxSkeleton
    }   
}
export {}