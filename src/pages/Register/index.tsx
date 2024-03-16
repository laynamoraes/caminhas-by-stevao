import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser } from "../../network/users"
import { useQuery } from "@tanstack/react-query"
import { CreateUser, castToUser, validationSchema } from "./helpers"
import {
  ButtonContainer,
  Container,
  ContentLeft,
  ContentRight,
  FormContainer,
  LinkSignIn,
} from "./styles"
import { Button } from "../../components/Button/styles"
import { ButtonVariant } from "../../components/Button"

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
    <Container>
      <ContentLeft>
        <FormContainer>
          <h1>Cadastre-se</h1>

          <FormikProvider value={form}>
            <InputForm
              label="Nome"
              type="text"
              name="name"
              placeholder="Escreva seu nome..."
            />

            <InputForm
              label="E-mail"
              type="email"
              name="email"
              placeholder="email@email.com"
            />

            <InputForm
              label="Senha"
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />

            <ButtonContainer>
              <Button variant={ButtonVariant.default} onClick={form.submitForm}>
                Cadastrar
              </Button>
            </ButtonContainer>

            <p>
              Já possui uma conta? <LinkSignIn to="/signin">Sign In</LinkSignIn>
            </p>
          </FormikProvider>

          {isLoading && <div>Carregando...</div>}
          {finishedCreateUser && <div>Usuário criado com sucesso!</div>}
        </FormContainer>
      </ContentLeft>
      <ContentRight />
    </Container>
  )
}
