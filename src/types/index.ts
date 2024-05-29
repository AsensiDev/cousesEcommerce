export type Curso = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Curso & {
    quantity: number
}

