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

  // 轮播图类型
export type BannerItem = {
    hrefUrl: string
    id: string
    imgUrl: string
    type: string
  }

  // 面板数据类型
  export interface IGoodItem {
    desc: string
    id: string
    name: string
    picture: string
    price: string
  }
 
  export interface IHotGoods{
    id: string
    picture: string
    title: string
    alt: string
  }

  export type Brand = {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
  }