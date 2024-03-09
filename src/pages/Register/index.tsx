import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"
import { client } from "../../network/api"
import { User } from "../../interfaces/user"
import { v4 as uuid } from "uuid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const [finishedCreateUser, setFinishedCreateUser] = useState(false)
  const navigate = useNavigate()

  interface CreateUser {
    name: string
    email: string
    password: string
  }

  // async function loadUsers() {
  //   setIsLoading(true)
  //   await new Promise((res) => setTimeout(res, 3000))
  //   const { data } = await client.get<User[]>("users")
  //   console.log(data)
  //   setIsLoading(false)
  // }

  function castToUser({ name, email, password }: CreateUser): User {
    return {
      id: uuid(),
      name,
      email,
      password,
    }
  }

  const form = useFormik<CreateUser>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const newUser = castToUser(values)

      setIsLoading(true)
      await new Promise((res) => setTimeout(res, 1000))

      await client.post("users", newUser)
      resetForm()
      setIsLoading(false)
      setFinishedCreateUser(true)

      await new Promise((res) => setTimeout(res, 1000))
      setFinishedCreateUser(false)

      navigate("/signin")
      console.log(newUser)
    },
  })

  // useEffect(() => {
  //   loadUsers()
  // }, [])

  return (
    <div>
      <h1>Cadastrar</h1>

      <FormikProvider value={form}>
        <InputForm type="text" name="name" placeholder="Escreva seu nome..." />
        <br />
        <br />
        <InputForm type="email" name="email" placeholder="email@email.com" />
        <br />
        <br />
        <InputForm
          type="password"
          name="password"
          placeholder="Digite sua senha"
        />
        <br />
        <br />
        <button onClick={form.submitForm}>Entrar</button>
      </FormikProvider>

      {isLoading && <div>Carregando...</div>}
      {finishedCreateUser && <div>Usuário criado com sucesso!</div>}
    </div>
  )
}
