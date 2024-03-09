import { useField } from "formik"
import { InputHTMLAttributes } from "react"

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

export default function InputForm({ label, type, ...props }: InputFormProps) {
  const { name } = props
  const [field, meta] = useField({ name })

  const error = meta.touched && meta.error

  return (
    <div
      style={{
        padding: "13px 0px",
      }}
    >
      <label
        style={{
          marginRight: "13px",
        }}
      >
        {label}
      </label>
      <span
        style={{
          color: "#f45",
        }}
      >
        {error}
      </span>
      <br />
      <input type={type} {...field} {...props} />
    </div>
  )
}
