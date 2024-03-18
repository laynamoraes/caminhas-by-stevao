import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"
import Button, { ButtonVariant } from "../../components/Button"
import StevaoAnimation from "../../assets/stevao-animation.png"
import {
  ButtonContainer,
  Container,
  ContentLeft,
  ContentRight,
  FormContainer,
  ImageAnimation,
  ImageContainer,
  LinkRegister,
} from "./styles"

interface SignInForm {
  email: string
  password: string
}

export default function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const form = useFormik<SignInForm>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setFieldError }) => {
      console.log(values)
      try {
        await signIn(values)
        navigate("/ecommerce")
      } catch (ex) {
        console.log(ex)
        setFieldError("email", "Usuário e/ou senha inválidos.")
      }
    },
  })

  return (
    <Container>
      <ContentLeft>
        <FormContainer>
          <h1>Entrar</h1>

          <FormikProvider value={form}>
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
                Entrar
              </Button>
            </ButtonContainer>

            <p>
              Não possui uma conta?{" "}
              <LinkRegister to="/register">Cadastre-se</LinkRegister>
            </p>
          </FormikProvider>
        </FormContainer>
      </ContentLeft>

      <ContentRight>
        <ImageContainer>
          <ImageAnimation src={StevaoAnimation} />
        </ImageContainer>
      </ContentRight>
    </Container>
  )
}
