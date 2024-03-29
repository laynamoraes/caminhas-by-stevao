import { User } from "../../interfaces/user"
import { v4 as uuid } from "uuid"
import * as Yup from "yup"

export interface CreateUser {
  name: string
  email: string
  password: string
}

export const requiredField = "Campo obrigatório"

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(requiredField),
  email: Yup.string().required(requiredField).email("E-mail inválido"),
  password: Yup.string().required(requiredField).min(8, "A senha deve conter no mínimo 8 caracteres")
})

export function castToUser({ name, email, password }: CreateUser): User {
  return {
    id: uuid(),
    name,
    email,
    password,
  }
}
