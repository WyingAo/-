import {defineStore} from 'pinia'

import { IApiRes,CategoryItem } from '@/types/data'
import request from '@/utils/request'
import {topCategory} from '../constants'
const defaultCategory = topCategory.map(item=>{
    return {
        name: item
    }
})
export default defineStore('category',{
    state:()=>({
        list:defaultCategory as CategoryItem[]
    }),
    actions:{
      async getHeaderNav(){
        const res = await request.get<IApiRes<CategoryItem[]>>(
            '/home/category/head'
          )
          this.list = res.data.result
       }
    }
})