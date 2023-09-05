export interface Romes{
    total_rooms : number,
    not_avl_rooms : number,
    avl_rooms : number
}

export interface RoomList{
    category: string,
    description: string,
    image : string[],
    price : number,
    title : string,
    rating : any
}