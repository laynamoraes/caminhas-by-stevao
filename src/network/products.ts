import { Product } from "../interfaces/product"
import { client } from "./api"

const path = "products"

export async function getProductsHome(limit: number): Promise<Product[]> {
  const { data } = await client.get(`${path}?_limit=${limit}`)
  return data
}
