export type SortUI = 'desc' | 'asc'
export interface CartItem {
    product: string,
    name: string,
    price: number,
    quantity: number,
    id: number
}
export interface Cart {
    items: Array<CartItem>
}

export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}