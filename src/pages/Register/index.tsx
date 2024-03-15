import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../../network/users"
import { useQuery } from "@tanstack/react-query"
import { CreateUser, castToUser, validationSchema } from "./helpers"

export default function Register() {
  const [finishedCreateUser, setFinishedCreateUser] = useState(false)
  const navigate = useNavigate()
  // const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => createUser,
  })

  const form = useFormik<CreateUser>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const newUser = castToUser(values)

      createUser(newUser)

      setFinishedCreateUser(true)
      await new Promise((res) => setTimeout(res, 3000))
      setFinishedCreateUser(false)

      navigate("/signin")
      console.log(data)
    },
  })

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
