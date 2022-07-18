import WyaSkeleton from '@/components/skeleton/index.vue'
import carousel from '@/components/carousel/index.vue'
import More from '@/components/more/index.vue'
import Bread from '@/components/bread/index.vue'
import BreadItem from '@/components/bread/Item.vue'
import Checkbox from '@/components/checkbox/index.vue'
import  { App } from 'vue'
export default {
    install(app:App){
        app.component('WyaSkeleton',WyaSkeleton)
        app.component('carousel',carousel)
        app.component('More',More)
        app.component('Bread',Bread)
        app.component('BreadItem',BreadItem)
        app.component('Checkbox',Checkbox)
    }
}