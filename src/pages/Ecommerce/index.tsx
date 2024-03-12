import { useAuth } from "../../hooks/auth"

export default function Ecommerce() {
  const { signOut } = useAuth()

  return (
    <div>
      <h1>E-commerce</h1>
      <button onClick={signOut}>Sair</button>
    </div>
  )
}
