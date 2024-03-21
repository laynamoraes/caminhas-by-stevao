// import { PaginationData, PaginationResponse } from "../../interfaces/pagination"

import { Product } from "../interfaces/product"
import { User } from "../interfaces/user"
import { client } from "./api"

const path = "users"

export async function createUser(user: User): Promise<void> {
  await client.post(`${path}`, user)
}

export async function updateUser(id: string, user: User): Promise<void> {
  await client.put(`${path}/${id}`, user)
}

export async function removeUser(id: string): Promise<void> {
  await client.delete(`${path}/${id}`)
}

export async function addProductInBag(
  id: string | undefined,
  productInBag: Product
): Promise<void> {
  await client.put(`${path}/${id}`, productInBag)
}
