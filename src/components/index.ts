import WyaSkeleton from '@/components/skeleton/index.vue'
import  { App } from 'vue'
export default {
    install(app:App){
        app.component('WyaSkeleton',WyaSkeleton)
    }
}