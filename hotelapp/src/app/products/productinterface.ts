export interface Products{
    id : number;
    title: string;
    description: string;
    image: string;
    rating: {rate : number,count:number};
    price: number
}