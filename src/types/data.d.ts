// 定义接口返回的数据类型
export interface IApiRes<T>{
    code:string
    msg:string
    result:T
}
export type CategoryItem = {
    id:string
    name:string
    picture:string
    children:CategoryItem[],
    open:boolean
    goods:CategoryGoods[]
}

export type CategoryGoods = {
    desc: string
    id: string
    name: string
    picture: string
    price: string
  }