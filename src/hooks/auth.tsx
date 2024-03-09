// Criando o nosso contexto/hook
// Passo 1: criar o contexto

import { createContext, useContext, useState } from "react"
import { User } from "../interfaces/user"
import { client } from "../network/api"

interface AuthContextData {
  user: User | null
  signIn(credentials: AuthCredentials): void
}

interface AuthCredentials {
  email: string
  password: string
}

// criamos o contexto, definimos a sua tipagem e os valores default
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// Passo 2: definir o provider (definição das funções e estados que vamos compartilhar com toda a aplicação)

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)

  async function signIn({ email, password }: AuthCredentials) {
    const { data } = await client.get<User[]>(`users?email=${email}`)

    if (data.length == 0 || data[0].password !== password) {
      throw new Error("Invalid credentials!")
    }

    // localStorage.setItem("user", JSON.stringify(data[0]))
    setUser(data[0])
  }

  return (
    <AuthContext.Provider value={{ user: user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

// Passo 3: criar o hook (função que nos permitirá ter acesso a esse contexto)
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error("useAuth must be used within an AuthProvider")

  return context
}
