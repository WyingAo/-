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
          res.data.result.forEach(item=>{
            item.open=false
          })
          this.list = res.data.result
       },
       show(id:string){
        const category = this.list.find(item=>item.id===id)
        category!.open=true
       },
       hide(id:string){
        const category = this.list.find(item=>item.id===id)
        category!.open=false
       }
    }
})