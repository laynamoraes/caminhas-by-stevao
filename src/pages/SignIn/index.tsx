import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

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
    <div>
      <h1>Sign In</h1>

      <FormikProvider value={form}>
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
    </div>
  )
}
