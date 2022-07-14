import WyaSkeleton from '@/components/skeleton/index.vue'
import Carousel from '@/components/carousel/index.vue'
import More from '@/components/more/index.vue'
declare module 'vue'{
    export interface GlobalComponents {
        XtxSkeleton: typeof XtxSkeleton,
        Carousel: typeof Carousel,
        More: typeof More
    }   
}
export {}