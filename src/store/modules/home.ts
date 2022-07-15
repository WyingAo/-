import request from '@/utils/request'
import { defineStore } from 'pinia'
import { IApiRes,BannerItem, IGoodItem,IHotGoods, Brand} from '@/types/data'
export default defineStore('home',{
    state:()=>({
        bannerList:[] as BannerItem[],
        newGoodList: [] as IGoodItem[],
        hotGoodList:[] as IHotGoods[],
        brandList:[] as Brand[]
    }),
    actions:{
        async getBannerList(){
            const res = await request.get<IApiRes<BannerItem[]>>('/home/banner')
            this.bannerList = res.data.result
        },
        async getNewList(){
            const res = await request.get<IApiRes<IGoodItem[]>>('/home/new')
            this.newGoodList = res.data.result
        },
        async getHotList(){
            const res = await request.get<IApiRes<IHotGoods[]>>('/home/hot')
            this.hotGoodList = res.data.result
        },
        async getBrandList() {
            const res = await request.get<IApiRes<Brand[]>>('/home/brand')
            console.log(res)
            this.brandList = res.data.result
          }, 
    }
})