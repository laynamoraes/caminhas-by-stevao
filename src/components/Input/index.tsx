import { useField } from "formik"
import { InputHTMLAttributes } from "react"
import { Container, ErrorText, Input, Label } from "./styles"

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

export default function InputForm({ label, type, ...props }: InputFormProps) {
  const { name } = props
  const [field, meta] = useField({ name })

  const error = meta.touched && meta.error

  return (
    <Container>
      <Label>{label}</Label>
      <Input type={type} {...field} {...props} />
      <ErrorText>{error}</ErrorText>
    </Container>
  )
}
