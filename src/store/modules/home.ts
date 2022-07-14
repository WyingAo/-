import request from '@/utils/request'
import { defineStore } from 'pinia'
import { IApiRes,BannerItem} from '@/types/data'
export default defineStore('home',{
    state:()=>({
        bannerList:[] as BannerItem[]
    }),
    actions:{
        async getBannerList(){
            const res = await request.get<IApiRes<BannerItem[]>>('/home/banner')
            this.bannerList = res.data.result
        }
    }
})