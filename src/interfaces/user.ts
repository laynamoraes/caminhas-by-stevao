import { Product } from "./product"

export interface User {
  id: string
  name: string
  email: string
  password: string
  productsInBag: Product[]
}
