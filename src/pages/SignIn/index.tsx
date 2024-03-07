import { FormikProvider, useFormik } from "formik"
import InputForm from "../../components/Input"

interface SignInForm {
  email: string
  password: string
}

export default function SignIn() {
  const form = useFormik<SignInForm>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      // try {
      //   await signIn(values)
      //   navigate("/")
      // } catch (ex) {
      //   alert(ex)
      //   setFieldError("password", "Usuário inválido")
      // }
    },
  })

  return (
    <div>
      <h1>Sign In</h1>

      <FormikProvider value={form}>
        <InputForm type="email" name="email" placeholder="email@email.com" />
        <br />
        <br />
        <InputForm type="password" name="password" placeholder="Digite sua senha" />
        <br />
        <br />
        <button onClick={form.submitForm}>Entrar</button>
      </FormikProvider>
    </div>
  )
}